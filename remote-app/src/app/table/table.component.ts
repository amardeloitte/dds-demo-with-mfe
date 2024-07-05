import { Component } from '@angular/core';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { ITableData } from './table.interface';
import { HttpClient } from '@angular/common/http';
import { DataMBusService } from 'data-m-bus';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  public rowData!: ITableData[];
  public gridApi!: GridApi<any>;

  public columnDefs: ColDef[] = [
    {
      field: 'name',
      width: 150,
      headerName: 'Full Name',
      checkboxSelection: true,
      headerCheckboxSelection: true,
    },
    { field: 'username', width: 90 },
    { field: 'email', width: 150 },
    { field: 'phone', width: 90 },
    { field: 'website', width: 150 },
  ];

  public defaultColDef: ColDef = {
    editable: true,
    filter: true,
  };

  public rowSelection: 'single' | 'multiple' = 'multiple';

  constructor(private http: HttpClient, private dataBus: DataMBusService) {}

  onGridReady(params: GridReadyEvent<ITableData>) {
    this.gridApi = params.api;
    this.dataBus.getDataFromHost().subscribe((res: any) => {
      this.columnDefs = res?.column ? res?.column : this.columnDefs;
      this.http
        .get<ITableData[]>('https://jsonplaceholder.typicode.com/users')
        .subscribe((data) => {
          this.rowData = data;
        });
    });
  }

  onSelectChange(e: any) {
    const selectedRows = this.gridApi?.getSelectedRows();
    const idArr = selectedRows?.map(row => row.id);
    this.dataBus.setDataFromRemote({
      idArr: idArr
    })
  }

  setDataForTechRemote() {
    this.dataBus?.setDataFromRemoteTable({
      text: "Hi from table"
    })
  }
}

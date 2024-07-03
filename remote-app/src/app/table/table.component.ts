import { Component } from '@angular/core';
import { ColDef, GridReadyEvent } from 'ag-grid-community';
import { ITableData } from './table.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  public rowData!: ITableData[];

  public columnDefs: ColDef[] = [
    { field: 'name', width: 150, headerName: 'Full Name', checkboxSelection: true,
      headerCheckboxSelection: true, },
    { field: 'username', width: 90 },
    { field: 'email', width: 150 },
    { field: 'phone', width: 90 },
    { field: 'website', width: 150 },
  ];

  public defaultColDef: ColDef = {
    editable: true,
    filter: true,
  };

  public rowSelection: "single" | "multiple" = "multiple";

  constructor(private http: HttpClient){}

  onGridReady(params: GridReadyEvent<ITableData>) {
    this.http
      .get<ITableData[]>(
        'https://jsonplaceholder.typicode.com/users'
      )
      .subscribe((data) => {
        this.rowData = data;
      });
  }
}

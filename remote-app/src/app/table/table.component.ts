import { Component, ViewEncapsulation } from '@angular/core';
import { ColDef, DomLayoutType, GridApi, GridReadyEvent } from 'ag-grid-community';
import { ITableData } from './table.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  private gridApi!: GridApi<ITableData>;
  public rowData!: ITableData[];

  constructor(private http: HttpClient) {}

  public columnDefs: ColDef[] = columnDefs;
  public domLayout: DomLayoutType = "autoHeight";
  public rowSelection: "single" | "multiple" = "multiple";
  public defaultColDef: ColDef = {
    editable: true,
    filter: true,
  };

  onGridReady(params: GridReadyEvent<ITableData>) {
    this.gridApi = params.api;

    this.http
      .get<
        ITableData[]
      >("https://jsonplaceholder.typicode.com/users")
      .subscribe((data) => (this.rowData = data));
  }

}

const columnDefs: ColDef[] = [
  { field: "name", headerName: "Full Name", checkboxSelection: true, headerCheckboxSelection: true, },
  { field: "username" },
  { field: "email" },
  { field: "phone" },
  { field: "website" }
];

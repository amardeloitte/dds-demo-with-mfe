import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { TableComponent } from './table.component';
import { AgGridAngular } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule, TableRoutingModule, AgGridAngular, HttpClientModule],
})
export class TableModule {}

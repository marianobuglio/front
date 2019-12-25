import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table/data-table.component';
import { DataTablesModule } from 'angular-datatables';
import { NbCardModule } from '@nebular/theme'
@NgModule({
  declarations: [DataTableComponent],
  imports: [
    CommonModule,
    NbCardModule,
    DataTablesModule
  ],
  exports:[
    DataTableComponent
  ]
})
export class ComponentsModule { }

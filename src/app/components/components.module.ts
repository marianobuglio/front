import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table/data-table.component';
import { DataTablesModule } from 'angular-datatables';
import { NbCardModule } from '@nebular/theme'
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [DataTableComponent],
  imports: [
    CommonModule,
    NbCardModule,
    DataTablesModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    DataTableComponent
  ]
})
export class ComponentsModule { }

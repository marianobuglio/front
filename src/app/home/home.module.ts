import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { NbMenuModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import {NbSecurityModule } from '@nebular/security'
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { 
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
} from '@nebular/theme';
@NgModule({
  declarations: [HomeComponent, ],
  imports: [
    CommonModule,
NbSecurityModule,
    HomeRoutingModule,
    NbMenuModule,
    ThemeModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    NbTreeGridModule,
    Ng2SmartTableModule

  ]
})
export class HomeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { ListSettingComponent } from './list-setting/list-setting.component';
import { NbMenuModule,NbCardModule } from '@nebular/theme';

@NgModule({
  declarations: [ListSettingComponent],
  imports: [
    CommonModule,
    SettingRoutingModule,
    NbMenuModule,
    NbCardModule
  ]
})
export class SettingModule { }

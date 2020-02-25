import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AddUserComponent } from './add-user/add-user.component';
import { ListUserComponent } from './list-user/list-user.component'
import { NbCardModule } from '@nebular/theme'
import { ComponentsModule } from '../components/components.module'
import { ReactiveFormsModule } from '@angular/forms';
import { 
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbInputModule,
  NbSelectModule
} from '@nebular/theme';

@NgModule({
  declarations: [AddUserComponent,ListUserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    NbCardModule,
    ComponentsModule,
    NbAlertModule,
    NbButtonModule,
    NbCheckboxModule,
    NbInputModule,
    NbSelectModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }

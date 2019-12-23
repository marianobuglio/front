import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from '../auth-guard.service';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';
const routes: Routes = [
  {
    path: '',
    component: NbAuthComponent,  
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path:'register',
        component:RegisterComponent
      },
      {
        path:'logout',
        component:NbLogoutComponent
      },
      {
        path:'reset',
        component:NbResetPasswordComponent,
      },
      {
        path:'request',
        component:NbRequestPasswordComponent,
      }

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

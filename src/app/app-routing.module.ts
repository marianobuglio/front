import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';
import { HomeComponent } from './home/home/home.component';
import { HomeModule} from './home/home.module'


const routes: Routes = [

  {
    path: '',
    component:HomeComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('app/auth/auth.module')
      .then(m => m.AuthModule),
  },
 
    

  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

const config: ExtraOptions = {
  useHash: false,
};
//
@NgModule({
  imports: [RouterModule.forRoot(routes, config),HomeModule],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

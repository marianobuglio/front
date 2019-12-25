import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children:[
      {
        path: 'user',
        loadChildren: () => import('app/user/user.module')
          .then(m => m.UserModule),
      },
      {
        path: 'setting',
        loadChildren: () => import('app/setting/setting.module')
          .then(m => m.SettingModule),
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

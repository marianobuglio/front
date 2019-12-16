import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {InicioComponent} from './inicio/inicio.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    
    children: [
      {
        path: 'inicio',
        component: InicioComponent,
      },
      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full',
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

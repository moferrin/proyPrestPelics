import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//components
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './auth.guard';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ReservasComponent } from './components/reservas/reservas.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { Reporte1Component } from './components/reportes/reporte1/reporte1.component';
import { Reporte2Component } from './components/reportes/reporte2/reporte2.component';
import { Reporte3Component } from './components/reportes/reporte3/reporte3.component';
import { Reporte4Component } from './components/reportes/reporte4/reporte4.component';
import { Reporte5Component } from './components/reportes/reporte5/reporte5.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/peliculas',
    pathMatch: 'full'
  },
  {
    path: 'peliculas', 
    component: PeliculasComponent, 
    canActivate: [AuthGuard]
  },
  {
    path: 'clientes', 
    component: ClientesComponent, 
    canActivate: [AuthGuard]
  },
  {
    path: 'empleados', 
    component: EmpleadosComponent, 
    canActivate: [AuthGuard]
  },
  {
    path: 'reservas', 
    component: ReservasComponent, 
    canActivate: [AuthGuard]
  },
  {
    path: 'signin', 
    component: SigninComponent
  },
  {
    path: 'signup', 
    component: SignupComponent
  },
  {
    path: 'reporte1', 
    component: Reporte1Component
  },
  {
    path: 'reporte2', 
    component: Reporte2Component
  },
  {
    path: 'reporte3', 
    component: Reporte3Component
  },
  {
    path: 'reporte4', 
    component: Reporte4Component
  },
  {
    path: 'reporte5', 
    component: Reporte5Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

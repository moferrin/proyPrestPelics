import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './auth.guard';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ReservasComponent } from './components/reservas/reservas.component';
import { TokenInterceptorService } from './services/login/token-interceptor.service';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { Reporte1Component } from './components/reportes/reporte1/reporte1.component';
import { Reporte2Component } from './components/reportes/reporte2/reporte2.component';
import { Reporte3Component } from './components/reportes/reporte3/reporte3.component';
import { Reporte4Component } from './components/reportes/reporte4/reporte4.component';
import { Reporte5Component } from './components/reportes/reporte5/reporte5.component';
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    PeliculasComponent,
    ClientesComponent,
    ReservasComponent,
    EmpleadosComponent,
    Reporte1Component,
    Reporte2Component,
    Reporte3Component,
    Reporte4Component,
    Reporte5Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard, {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

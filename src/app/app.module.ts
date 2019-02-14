import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { APP_ROUTING } from './app.routes';
import { AsistenciaComponent } from './components/asistencia/asistencia.component';

// Archivo de Rutas de la aplicación

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AsistenciaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

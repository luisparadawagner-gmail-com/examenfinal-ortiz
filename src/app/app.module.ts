import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormularioClienteComponent } from './componentes/formulario-cliente/formulario-cliente.component';
import { FormularioRutinaComponent } from './componentes/formulario-rutina/formulario-rutina.component';
import { TablaClienteComponent } from './componentes/tabla-cliente/tabla-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioClienteComponent,
    FormularioRutinaComponent,
    TablaClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

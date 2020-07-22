import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioClienteComponent } from './componentes/formulario-cliente/formulario-cliente.component';
import { FormularioRutinaComponent } from './componentes/formulario-rutina/formulario-rutina.component';
import { TablaClienteComponent } from './componentes/tabla-cliente/tabla-cliente.component';

const routes: Routes = [
  {
    path: 'formulario-cliente-component',
    component: FormularioClienteComponent,
  },
  { path: 'formulario-rutina-component', component: FormularioRutinaComponent },
  { path: 'tabla-cliente-component', component: TablaClienteComponent },
  { path: '', redirectTo: 'tabla-cliente-component', pathMatch: 'full' },
  { path: '**', component: TablaClienteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

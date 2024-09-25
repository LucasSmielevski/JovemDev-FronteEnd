import { ListaClientesComponent } from './../../../exercicio-04/src/app/lista-clientes/lista-clientes.component';
import { FormularioClienteComponent } from './../../../exercicio-04/src/app/formulario-cliente/formulario-cliente.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

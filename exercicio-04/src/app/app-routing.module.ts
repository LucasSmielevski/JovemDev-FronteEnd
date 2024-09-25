import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioClienteComponent } from './formulario-cliente/formulario-cliente.component';

const routes: Routes = [
  {path : "", component: FormularioClienteComponent},
  {path : "teste", redirectTo : "cliente"},
  {path : "clientes" , component: ListaClientesComponent},
  {path : "formulario", component : FormularioClienteComponent},
  {path : "formulario/:id", component : FormularioClienteComponent},
  {
    path : "clientes",
    children: [
      {path : "listagem" , component : ListaClientesComponent},
      {path : "cadastro", component : FormularioClienteComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

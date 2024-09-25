import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormularioFuncionarioComponent } from './formulario-funcionario/formulario-funcionario.component';
import { ListagemFuncionarioComponent } from './listagem-funcionario/listagem-funcionario.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {path : "", component : DashboardComponent},
  {
    path : "funcionario",
    children: [
      {path : "cadastro" , component : FormularioFuncionarioComponent},
      {path : "listagem" , component : ListagemFuncionarioComponent},
      {path : "cadastro/:id", component : FormularioFuncionarioComponent},
    ]
  },
   {path : "**", component : ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

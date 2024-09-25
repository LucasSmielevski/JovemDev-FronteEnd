import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemFuncionariosComponent } from './features/listagem-funcionarios/listagem-funcionarios.component';
import { CadastroFuncionarioComponent } from './features/cadastro-funcionario/cadastro-funcionario.component';
import { FuncionarioComponent } from './funcionario.component';

const routes: Routes = [
  {
    path : "funcionario" , component : FuncionarioComponent,
    children : [
      {path : "" , component : ListagemFuncionariosComponent},
      {path : "cadastro" , component : CadastroFuncionarioComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionarioRoutingModule { }

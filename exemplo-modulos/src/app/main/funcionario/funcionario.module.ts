import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionarioRoutingModule } from './funcionario-routing.module';
import { FuncionarioComponent } from './funcionario.component';
import { ListagemFuncionariosModule } from './features/listagem-funcionarios/listagem-funcionarios.module';
import { CadastroFuncionarioModule } from './features/cadastro-funcionario/cadastro-funcionario.module';


@NgModule({
  declarations: [
    FuncionarioComponent
  ],
  imports: [
    CommonModule,
    FuncionarioRoutingModule,
    ListagemFuncionariosModule,
    CadastroFuncionarioModule
  ]
})
export class FuncionarioModule { }

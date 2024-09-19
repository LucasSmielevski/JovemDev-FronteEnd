import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoComponent } from './produto.component';
import { ListagemProdutoComponent } from './features/listagem-produto/listagem-produto.component';
import { CadastroProdutoComponent } from './features/cadastro-produto/cadastro-produto.component';
import { CadastroProdutoModule } from './features/cadastro-produto/cadastro-produto.module';
import { ListagemProdutoModule } from './features/listagem-produto/listagem-produto.module';


@NgModule({
  declarations: [
    ProdutoComponent,

  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    CadastroProdutoModule,
    ListagemProdutoModule
  ]
})
export class ProdutoModule { }

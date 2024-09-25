import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemProdutoComponent } from './features/listagem-produto/listagem-produto.component';
import { ProdutoComponent } from './produto.component';
import { CadastroProdutoComponent } from './features/cadastro-produto/cadastro-produto.component';

const routes: Routes = [
  {path : "produto" , component : ProdutoComponent,
    children : [
      {path : "listagem", component : ListagemProdutoComponent},
      {path : "cadastro" , component : CadastroProdutoComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }

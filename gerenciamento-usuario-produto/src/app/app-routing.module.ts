import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : "usuario",
    loadChildren : () => import('./main/usuario/usuario.module').then((m) => m.UsuarioModule)
  },
  {path : "produto",
    loadChildren : () => import('./main/produto/produto.module').then((m) => m.ProdutoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

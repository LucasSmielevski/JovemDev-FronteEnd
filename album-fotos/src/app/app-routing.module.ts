import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThumbListaComponent } from './thumb-lista/thumb-lista.component';
import { AlbumFotosService } from './main/album-fotos.service';

const routes: Routes = [
  { path: '', component: ThumbListaComponent},
  { path: 'album/:id', component: AlbumFotosService},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { AlbumFotosService } from '../main/album-fotos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fotos-album',
  templateUrl: './fotos-album.component.html',
  styleUrl: './fotos-album.component.scss',
})
export class FotosAlbumComponent implements OnInit {
  fotos: any[] = [];
  albumId!: number;

  constructor(
    private albumService: AlbumFotosService,
    private activateRoute: ActivatedRoute
  ) {
    this.activateRoute.params.subscribe((params) => {
      this.albumId = +params['id'];
    });
  }

  ngOnInit(): void {
    this.carregarFotos();
  }

  carregarFotos(): void {
    this.albumService.buscarFotosByAlbum(this.albumId).subscribe((valores) => {
      this.fotos = valores;
    });
  }
}

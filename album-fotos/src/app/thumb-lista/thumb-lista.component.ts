import { Component, OnInit } from '@angular/core';
import { AlbumFotosService } from '../main/album-fotos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thumb-lista',
  templateUrl: './thumb-lista.component.html',
  styleUrl: './thumb-lista.component.scss'
})
export class ThumbListaComponent implements OnInit {
  albums: any[] = [];

  constructor(
    private albumService: AlbumFotosService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.albumService.buscarAlbums().subscribe(valores => {
      this.albums = valores;
      this.albums.forEach(album => {
        this.albumService.buscarFotosByAlbum(album.id).subscribe(fotos => {
          album.thumbnail = fotos.length > 0 ? fotos[0].thumbnailUrl : 'nada';
        });
      });
    });
  }

  clicarAlbum(albumId: number): void {
    this.route.navigate(['/album', albumId])
  }
}

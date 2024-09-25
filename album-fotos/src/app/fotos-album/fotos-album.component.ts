import { Component, OnInit } from '@angular/core';
import { AlbumFotosService } from '../main/album-fotos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fotos-album',
  templateUrl: './fotos-album.component.html',
  styleUrl: './fotos-album.component.scss'
})
export class FotosAlbumComponent implements OnInit{
  fotos: any[] = [];

  constructor(
    private albumService: AlbumFotosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    
  }
}

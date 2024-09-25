import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumFotosService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/photos';
  private albumUrl = 'https://jsonplaceholder.typicode.com/albums'


  constructor(private http: HttpClient) {}

  buscarAlbums() {
    return this.http.get<Array<any>>(this.albumUrl);
  }

  buscarFotosByAlbum(albumId: number) {
    return this.http.get<Array<any>>(this.apiUrl, {params : {albumId : albumId.toString()}}).pipe(take(1));
  }
}

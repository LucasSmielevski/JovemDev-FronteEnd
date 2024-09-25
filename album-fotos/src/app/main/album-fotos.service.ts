import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumFotosService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) {}

  buscarAlbums(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  buscarFotosByAlbum(albumId: number): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl, {params : {albumId : albumId.toString()}}).pipe(take(1));
  }
}

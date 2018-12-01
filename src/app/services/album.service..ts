
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Photo } from '../Photo';
//import { Album } from '../../album';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AlbumService {
 
  //album = new EventEmitter<Album>();

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get<Photo[]>('http://localhost:3000/photos');
  }
//   getListByUser(userId): Observable<Album[]> {
//     return this.http.get<Album[]>('https://jsonplaceholder.typicode.com/albums/?userId=' + userId);
//   }
  getListByUserName(username) {
    return this.http.get<Photo[]>('http://localhost:3000/photos/?username=' + username);
  }
//   getPhotoByAlbum(albumId): Observable<Photo[]> {
//     return this.http.get<Photo[]>('https://jsonplaceholder.typicode.com/photos?albumId=' + albumId);
//   }

//   set(album) {
//     console.log(album);

//   }
}
import { Component, OnInit } from '@angular/core';  
import {Photo} from '../Photo'
import {AlbumService} from '../services/album.service.'

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

   albumName: string = "my album";
   photo: Photo = new Photo()
   photos: Photo[];

   constructor(private albumService: AlbumService) { 

    this.photos = new Array<Photo>();
   }

  ngOnInit() {

    this.photo.url = 'https://www.nationalgeographic.com/content/dam/travel/Guide-Pages/europe/austria/Austria_NationalGeographic_2618017.ngsversion.1501174663803.adapt.1900.1.jpg';
    this.photo.username= 'admin'


    //this.photos.push(this.photo)
    this.getPhotos();

    // this.photo.url = p1.url
    // this.photo.username= p1.username;

  }


    getPhotos() {
       this.albumService.getList().subscribe(
         
          data => {this.photos = data},
          err => console.error(err),
          () => { console.log('done loading photos'); console.log(this.photos) }
        );
      }


}

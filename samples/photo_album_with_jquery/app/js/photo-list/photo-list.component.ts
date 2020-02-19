import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {PhotoAlbum} from '../model/photo-album.service';

import {Photo} from '../model/photo';



@Component({
  moduleId: module.id,
  selector: 'photo-list',
  templateUrl: 'photo-list.component.html',
  styleUrls: ['photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  private photos: Observable<Photo[]>;

  
    private a1: string;
    private a2: string;

  constructor(
    private photoAlbum: PhotoAlbum
  ) { }

  ngOnInit(): void {
    this.photos = new Observable<Photo[]>();//this.photoAlbum.getPhotos();
    let cld = (window as any).cloudinary.Cloudinary.new({cloud_name: 'demo'})
    cld.videoPlayer('example-player') 
   
    this.a1 = 'video';
    this.a2 = 'image';
    (window as any).cloudinary.createMediaLibrary({
      cloud_name: "picturecloud7",
          api_key: "944887911222188",
          button_class: "myBtn",
          username: "rebecca.peltz@cloudinary.com",
          button_caption: "Select Image or Video"
    }, {
        insertHandler: function (data) {
          data.assets.forEach(asset => {
            console.log("Inserted asset:",
              JSON.stringify(asset, null, 2)) 
          })
        }
      },
        "#open-btn"
      )
    
  }


}

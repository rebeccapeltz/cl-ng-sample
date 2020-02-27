import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { PhotoAlbum } from "../model/photo-album.service";

import { Photo } from "../model/photo";

@Component({
  moduleId: module.id,
  selector: "photo-list",
  templateUrl: "photo-list.component.html",
  styleUrls: ["photo-list.component.css"]
})
export class PhotoListComponent implements OnInit {
  private photos: Observable<Photo[]>;

  private widget: any = null;
  private a1: string;
  private a2: string;

  constructor(private photoAlbum: PhotoAlbum) {}

  ngOnInit(): void {
    this.photos = new Observable<Photo[]>(); //this.photoAlbum.getPhotos();
    let cld = (window as any).cloudinary.Cloudinary.new({ cloud_name: "demo" });
    cld.videoPlayer("example-player");

    this.a1 = "video";
    this.a2 = "image";
    (window as any).cloudinary.createMediaLibrary(
      {
        cloud_name: "picturecloud7",
        api_key: "94488791222188",
        button_class: "myBtn",
        username: "rebeccapeltz@gmail.com",
        button_caption: "Select Image or Video"
      },
      {
        insertHandler: function(data) {
          data.assets.forEach(asset => {
            console.log("Inserted asset:", JSON.stringify(asset, null, 2));
          });
        }
      },
      "#open-btn"
    );
    this.widget = (window as any).cloudinary.createUploadWidget(
      {
        cloudName: "picturecloud7",
        uploadPreset: "bp_test_1"
      },
      (error, result) => {
        console.log(error);
        console.log(result);
      }
    );
  }
  onOpenUpload($event) {
    this.widget.open();
    console.log("Open upload button is clicked!", $event);
  }
}

import { Component, OnInit } from '@angular/core';
import { NewGalleryService } from 'src/app/services/new-gallery.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  galleryName:string = '';

  constructor(private _gallery : NewGalleryService) { }

  ngOnInit(): void {
    const gallery = this._gallery.getGallery();

    if(gallery){
      this.galleryName = gallery.name;
    }
  }



  
}

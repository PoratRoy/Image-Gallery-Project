import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/services/gallery.service';


@Component({
  selector: 'app-gallery-layout',
  templateUrl: './gallery-layout.component.html',
  styleUrls: ['./gallery-layout.component.css']
})
export class GalleryLayoutComponent implements OnInit {

  galleryName:string = '';

  constructor(private _gallery : GalleryService) { }

  ngOnInit(): void {
    this.getGalleryName(); 
  }
  
  getGalleryName= async()=>{
    try{
      const gallery = await this._gallery.getGallery();
      this.galleryName = gallery.name;
    }catch(err){
      console.log(err);
    }
  }

}

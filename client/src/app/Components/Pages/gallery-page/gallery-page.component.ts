import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/models/Image';
import {ImagesService} from '../../../services/images.service'
import { PrivateModeService } from 'src/app/services/private-mode.service';
import { SearchService } from 'src/app/services/search.service';
import { NewGalleryService } from 'src/app/services/new-gallery.service';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.css']
})
export class GalleryPageComponent implements OnInit {

  images: Image[];
  isCarousel: boolean = false;
  displayType: boolean;
  privateIcon: boolean = false;
  
  constructor(private _images : ImagesService, private _permission : PrivateModeService, private _search : SearchService, private _gallery : NewGalleryService) { }
  
  ngOnInit(): void {

    this._permission.permission.subscribe((permission)=> {
        this._images.getImageByPrivate().subscribe((data) => {this.images = data})
        this._search.havePermission(true);
        this.privateIcon = true;
        //return;
    })

    this._images.getImageByNoPrivate().subscribe((imgs)=>{this.images = imgs;})
    this._search.havePermission(false);
    this.privateIcon = false;


    this._images.displayImages.subscribe((b)=>{
      
          this._images.getImageByNoPrivate().subscribe((imgs)=>{this.images = imgs;})
          this._search.havePermission(false);
          this.privateIcon = false;
    })

    this._search.filterImages.subscribe((value)=>{
      this.images = value;
    })

    const gallery = this._gallery.getGallery();
    if(gallery){
      if(gallery.display == 'list'){
        setTimeout(()=>{this.displayType = true;}, 300)
        
      }else{
        this.displayType = false;
      }
    }
  }
  

  dispalyAsGrid(){
    this.isCarousel = false;
    this.displayType = false;
  }
  
  dispalyAsList(){
    this.isCarousel = false;
    this.displayType = true;
  }

  displayAsCarousel(){
    this.isCarousel = true;
  }

}



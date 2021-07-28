import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/models/Image';
import {ImagesService} from '../../../services/images.service'
import { PrivateModeService } from 'src/app/services/private-mode.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.css']
})
export class GalleryPageComponent implements OnInit {

  images: Image[];
  isCarousel: boolean = false;
  privateIcon: boolean = false;
  
  constructor(private _images : ImagesService, private _permission : PrivateModeService, private _search : SearchService ) { }
  
  ngOnInit(): void {

    this._permission.permission.subscribe((permission)=> {
      
      if(permission){
        this._images.getImageByPrivate().subscribe((data) => {this.images = data})
        this._search.havePermission(true);
        this.privateIcon = true;
        return;
      } else {
        this._images.getImageByNoPrivate().subscribe((imgs)=>{this.images = imgs;})    
        this._search.havePermission(false);
        this.privateIcon = false;
      }    
    })
    
    this._images.getImageByNoPrivate().subscribe((imgs)=>{this.images = imgs;})
    this._search.havePermission(false);
    this.privateIcon = false;

    this._search.filterImages.subscribe((value)=>{
      this.images = value;
    })
  }

  dispalyAsGallery(){
    this.isCarousel = false;
  }

  displayAsCarousel(){
    this.isCarousel = true;
  }

}



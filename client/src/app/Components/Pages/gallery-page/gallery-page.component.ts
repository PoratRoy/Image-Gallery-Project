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
  privateIcon: boolean = false;

  
  constructor(private _images : ImagesService, 
              private _permission : PrivateModeService, 
              private _search : SearchService) { }
  
  ngOnInit(): void {
      
    this._permission.permission.subscribe((p)=> {
      this.getPrivateImages()
    })
    

    this.getNoPrivateImages()  

    
    this._images.displayImages.subscribe((b)=>{  
      this.getNoPrivateImages()
    })

    this._search.filterImages.subscribe((value)=>{
      this.images = value;
    })

    
  }


  getNoPrivateImages= async()=>{
    this.images = await this._images.getImageByNoPrivate()
    
    this._search.havePermission(false);
    this.privateIcon = false;  
  }

  getPrivateImages = async()=>{
    this.images = await this._images.getImageByPrivate()
    this._search.havePermission(true);
    this.privateIcon = true;
  }



}



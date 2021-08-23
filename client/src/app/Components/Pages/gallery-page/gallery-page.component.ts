import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/models/Image';
import {ImagesService} from '../../../services/images.service'
import { PrivateModeService } from 'src/app/services/private-mode.service';
import { SearchService } from 'src/app/services/search.service';
import { GalleryService } from 'src/app/services/gallery.service';

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

  
  constructor(private _images : ImagesService, 
              private _permission : PrivateModeService, 
              private _search : SearchService, 
              private _gallery : GalleryService) { }
  
  ngOnInit(): void {
      
    this._permission.permission.subscribe((permission)=> {
      this.getPrivateImages()
    })
    

    this.getNoPrivateImages()  

    
    this._images.displayImages.subscribe((b)=>{  
      this.getNoPrivateImages()
    })

    this._search.filterImages.subscribe((value)=>{
      this.images = value;
    })

    this.getGalleryDisplay();

    
  }


  getNoPrivateImages= async()=>{
    this.images = await this._images.getImageByNoPrivate()
    console.log(this.images);
    
    this._search.havePermission(false);
    this.privateIcon = false;  
  }

  getPrivateImages = async()=>{
    this.images = await this._images.getImageByPrivate()
    this._search.havePermission(true);
    this.privateIcon = true;
  }

  getGalleryDisplay= async()=>{
    try{
      const gallery = await this._gallery.getGallery();
      
      if(gallery.display == 'list'){
        setTimeout(()=>{this.displayType = true;}, 300)  
      }else{
        this.displayType = false;
      }

    }catch(err){
      console.log(err);
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



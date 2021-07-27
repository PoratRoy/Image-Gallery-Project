import { Component, OnInit } from '@angular/core';
import { MOCK_IMG } from 'src/app/mock-images';
import { Image } from 'src/app/models/Image';
import {ImagesService} from '../../../services/images.service'
import { PrivateModeService } from 'src/app/services/private-mode.service';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.css']
})
export class GalleryPageComponent implements OnInit {

  images: Image[];
  
  constructor(private _images : ImagesService, private _permission : PrivateModeService ) { }
  
  ngOnInit(): void {

    this._permission.permission.subscribe((permission)=> {
      
      if(permission){
        this._images.getImageByPrivate().subscribe((data) => {this.images = data})
        return;
      } else {
        this._images.getImageByNoPrivate().subscribe((imgs)=>{this.images = imgs;})
        
      }    
    })
    
    this._images.getImageByNoPrivate().subscribe((imgs)=>{this.images = imgs;})
  }

  renderGallery($event){
    this.images = $event;
  }

}



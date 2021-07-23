import { Component, OnInit } from '@angular/core';
import { MOCK_IMG } from 'src/app/mock-images';
import { Image } from 'src/app/models/Image';
import {ImagesService} from '../../../services/images.service'

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.css']
})
export class GalleryPageComponent implements OnInit {

  images: Image[];
  
  constructor(private _images : ImagesService) { }
  
  ngOnInit(): void {
    this._images.getAllImages().subscribe((img)=>{
      this.images = img;
    })
  }

}



import { Component, OnInit } from '@angular/core';
import { MOCK_IMG } from 'src/app/mock-images';
import { Image } from 'src/app/models/Image';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.css']
})
export class GalleryPageComponent implements OnInit {

  images: Image[];
  
  constructor() { }
  
  ngOnInit(): void {
    this.images = MOCK_IMG;
  }

}



import { Component, OnInit, Input } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { Image } from 'src/app/models/Image';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {

  @Input() images : Image[];

  imagesSrc : string[] = [];

  constructor() {}

  ngOnInit(): void {

    this.images.map((i)=>{
      this.imagesSrc.push(i.src);
    })

    for (var i = this.imagesSrc.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = this.imagesSrc[i];
      this.imagesSrc[i] = this.imagesSrc[j];
      this.imagesSrc[j] = temp;
    }
  }
}

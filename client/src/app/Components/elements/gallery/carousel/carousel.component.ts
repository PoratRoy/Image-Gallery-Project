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

  // slides = [
  //   {
  //     image:
  //       'https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp',
  //   },
  //   {
  //     image:
  //       'https://ic.pics.livejournal.com/bestofthedaykj/86880610/22086/22086_original.jpg',
  //   },
  //   {
  //     image:
  //       'https://instant-bollywood-1.s3.ap-south-1.amazonaws.com/wp-content/uploads/2021/04/25055744/unnamed-2.jpg',
  //   },
  // ];

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

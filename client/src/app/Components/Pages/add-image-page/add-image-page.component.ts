import { Component, OnInit } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { Image } from 'src/app/models/Image';
import {ImagesService} from '../../../services/images.service'

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image-page.component.html',
  styleUrls: ['./add-image-page.component.css']
})
export class AddImagePageComponent implements OnInit {

  image: string = '';
  imageCaption: string = '';


  constructor(private _images : ImagesService) { }

  ngOnInit(): void {}

  handleImgFromCamera(webcamImage: WebcamImage){
    this.image = webcamImage.imageAsDataUrl;
    this.imageCaption = `NewImage${new Date().toISOString}`;
  }

  handleImgFromLocal($event){
    this.image = $event[0];
    this.imageCaption = $event[1];

    console.log(this.image);
    console.log(this.imageCaption);
  }


  SelectIamge():void{
    
    const imageTemplate : Image = {
      caption: this.imageCaption,
      photo: this.image,
      location: '',
      categories: '',
      favorite: false,
      private: false,
    }

    this._images.enroll(imageTemplate).subscribe(
      data => console.log('s',data),
      error => console.log('e', error)
    )

  }

}



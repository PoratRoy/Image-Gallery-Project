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
    this.imageCaption = `NewImage${Math.random()}.jpg`;
  }

  handleImgFromLocal($event){
    this.image = $event[0];
    this.imageCaption = $event[1];
  }

  handleImgFromOnline($event){
    this.image = $event[0];
    this.imageCaption = $event[1];
  }

  selectIamge= async()=>{

    const imageTemplate : Image = {
      caption: this.imageCaption,
      src: this.image,
      location: [0,0],
      categories: '',
      favorite: false,
      private: false,
    }

    try{
      const data = await this._images.appendImage(imageTemplate);
      console.log(data);
    }catch(err){
      console.log(err);
    }
  }

  removeImage(){
    this.image = '';
  }

  imagesNoPrivate():void{
    this._images.displayNoPrivateImages();
  }


}



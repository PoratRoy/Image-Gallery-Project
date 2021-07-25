import { Component, OnInit, Inject } from '@angular/core';
import { Image } from 'src/app/models/Image';
import { ImagesService } from 'src/app/services/images.service';
import {TaggoleModalService} from '../../../../services/taggoles/taggole-modal.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-modal-details',
  templateUrl: './modal-details.component.html',
  styleUrls: ['./modal-details.component.css']
})
export class ModalDetailsComponent implements OnInit {

  categories = ['A','B','C','D'];
  mapVisible:boolean = false;
  isSubmitted:boolean = false;
  isCoordsSelected:boolean = false;
  image:Image;
  latitude: number;
  longitude: number;

  constructor(private _images : ImagesService, @Inject(MAT_DIALOG_DATA) private data:any) { }

  ngOnInit(): void {

    this.image = this.data.image;
    this.latitude = this.image ? this.image.location[0] : 0;  //need to change
    this.longitude = this.image ? this.image.location[1] : 0; //need to change
    this.isSubmitted =false;
    this.isCoordsSelected =false;
  }
  
  taggleMap(){
    this.mapVisible = !this.mapVisible;
  }
  
  handleCoordsFromMap($event){
    this.image.location = [$event[0],$event[1]];
    this.isCoordsSelected =true;
    this.taggleMap()
  }

  onSubmit(){ //dont forget to add the image to the form
    this.isSubmitted =true;
    //this.image.src = '';  not sure i want to send the src.. but if i delete him its affect the ui
    this._images.updateImage(this.image).subscribe(
      data => console.log('s',data),
      error => console.log('e', error)
    )
  }
  

}

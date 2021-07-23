import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/models/Image';
import { ImagesService } from 'src/app/services/images.service';
import {TaggoleModalService} from '../../../../services/taggole-modal.service';


@Component({
  selector: 'app-modal-details',
  templateUrl: './modal-details.component.html',
  styleUrls: ['./modal-details.component.css']
})
export class ModalDetailsComponent implements OnInit {

  categories = ['A','B','C','D'];
  visible:boolean = false;
  mapVisible:boolean = false;
  isSubmitted:boolean = false;
  isCoordsSelected:boolean = false;
  image:Image;
  latitude: number;
  longitude: number;

  constructor(private modal:TaggoleModalService, private _images : ImagesService) { }

  ngOnInit(): void {
    this.modal.taggleModal.subscribe((res)=>{this.visible = res;})
    this.modal.imageModal.subscribe((image)=>{this.image = image})
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

    this._images.appendImage(this.image).subscribe(
      data => console.log('s',data),
      error => console.log('e', error)
    )
  }
  
  close():void{
    this.visible = false;
  }

}

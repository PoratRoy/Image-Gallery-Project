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
  submitted:boolean = false;
  image:Image
  constructor(private modal:TaggoleModalService, private _images : ImagesService) { }

  ngOnInit(): void {
    this.modal.taggleModal.subscribe((res)=>{
      this.visible = res;
    })
    this.modal.imageModal.subscribe((image)=>{
      this.image = image
    })
  }

  close():void{
    this.visible = false;
  }

  onSubmit(){ //dont forget to add the image to the form
    this.submitted =true;
    this._images.enroll(this.image).subscribe(
      data => console.log('s',data),
      error => console.log('e', error)
    )
  }

}

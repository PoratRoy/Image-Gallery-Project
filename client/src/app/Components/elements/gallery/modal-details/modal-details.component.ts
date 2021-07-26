import { Component, OnInit, Inject } from '@angular/core';
import { Image } from 'src/app/models/Image';
import { ImagesService } from 'src/app/services/images.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { MapComponent } from '../map/map.component';
import {FormControl, Validators} from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/errors/errorMatcher';


@Component({
  selector: 'app-modal-details',
  templateUrl: './modal-details.component.html',
  styleUrls: ['./modal-details.component.css']
})
export class ModalDetailsComponent implements OnInit {

  categories = ['A','B','C','D'];
  isSubmitted:boolean = false;
  isCoordsSelected:boolean = false;
  image:Image;
  latitude: number;
  longitude: number;

  constructor(private _images : ImagesService, @Inject(MAT_DIALOG_DATA) private data:any, public _dialog: MatDialog) { }

  ngOnInit(): void {
    this.image = this.data.image;

    const splitLocation = this.image.location.toString().split(',',2);
    this.latitude = this.image ? +splitLocation[0] : 0;
    this.longitude = this.image ? +splitLocation[1] : 0;
    
    this.isSubmitted =false;
    this.isCoordsSelected =false;
  }

  captionFormControl = new FormControl('', [Validators.required,]);
  matcher = new MyErrorStateMatcher();
  
  taggleMap(){
    let ref = this._dialog.open(MapComponent, {data:{latitude: this.latitude, longitude: this.longitude}})
    ref.afterClosed().subscribe(res=>{
      if(res){
        this.image.location = res;
      }
    })
    this.isCoordsSelected =true;
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


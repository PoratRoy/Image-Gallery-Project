import { Component, OnInit, Inject } from '@angular/core';
import { Image } from 'src/app/models/Image';
import { ImagesService } from 'src/app/services/images.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { MapComponent } from '../map/map.component';
import {FormControl, Validators} from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/errors/errorMatcher';
import { CategoryService } from 'src/app/services/category.service';


@Component({
  selector: 'app-modal-details',
  templateUrl: './modal-details.component.html',
  styleUrls: ['./modal-details.component.css']
})
export class ModalDetailsComponent implements OnInit {

  image:Image;
  categories: string[];
  isSubmitted:boolean = false;
  isCoordsSelected:boolean = false;
  isFavoriteSelected:boolean = false;
  isPrivateSelected:boolean = false;
  latitude: number;
  longitude: number;
  favoriteFlag:boolean;
  privateFlag:boolean;

  constructor(private _images : ImagesService, private _categories : CategoryService, 
              @Inject(MAT_DIALOG_DATA) private data:any, public _dialog: MatDialog) { }

  ngOnInit(): void {

    this.getAllCategories()
    
    this.image = this.data.image;

    const splitLocation = this.image.location.toString().split(',',2);
    this.latitude = this.image ? +splitLocation[0] : 0;
    this.longitude = this.image ? +splitLocation[1] : 0;
    
    this.isSubmitted =false;
    this.isCoordsSelected =false;
    this.isFavoriteSelected =false;
    this.isPrivateSelected =false;

    this.privateFlag = this.image.private;
    this.favoriteFlag = this.image.favorite;
  }

  getAllCategories = async()=>{
    try{
      this.categories = await this._categories.getAllCategories()
    }catch(err){
      console.log(err);
    }
  }

  captionFormControl = new FormControl('', [Validators.required,]);
  matcher = new MyErrorStateMatcher();
  
  taggleMap(){
    let ref = this._dialog.open(MapComponent, {data:{latitude: this.latitude, longitude: this.longitude}})
    ref.afterClosed().subscribe(res=>{
      if(res){
        this.image.location = res;
        this.isCoordsSelected =true;
      }
    })
  }

  clickFavorite(){
    this.isFavoriteSelected = !this.isFavoriteSelected;
  }

  clickPrivate(){
    this.isPrivateSelected = !this.isPrivateSelected;
  }

  onSubmit = async()=>{ 
    this.image.favorite = this.favoriteFlag;
    this.image.private = this.privateFlag;

    //this.image.src = '';  not sure i want to send the src.. but if i delete him its affect the ui
    try{
      const data = await this._images.updateImage(this.image);
      console.log(data);
    }catch(err){
      console.log(err);
    }
  }

  isSubmittedClick = ()=>{
    this.isSubmitted =true;
  }
  
}


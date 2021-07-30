import { Component, OnInit } from '@angular/core';
import { Gallery } from 'src/app/models/gallery';
import {FormControl, Validators} from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/errors/errorMatcher';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent implements OnInit {

  gallery:Gallery;

  constructor(private _gallery : GalleryService) { }

  ngOnInit(): void {

    this.gallery = {
      name:'',
      description:'',
      display:'grid',
      camera:false,
      location:false,
      private:false
    }

  }

  nameFormControl = new FormControl('', [Validators.required,]);
  matcher = new MyErrorStateMatcher();

  onSubmit=async()=>{
    try{
      const data = await this._gallery.appendGallery(this.gallery);
      console.log(data);
    } catch(err){
      console.log(err);
    }
  }

}

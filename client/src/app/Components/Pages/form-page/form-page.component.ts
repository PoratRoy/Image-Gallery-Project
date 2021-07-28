import { Component, OnInit } from '@angular/core';
import { Gallery } from 'src/app/models/gallery';
import {FormControl, Validators} from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/errors/errorMatcher';
import { NewGalleryService } from 'src/app/services/new-gallery.service';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent implements OnInit {

  gallery:Gallery;

  constructor(private _gallery : NewGalleryService) { }

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

  onSubmit(){ 
    this._gallery.create(this.gallery);
  }

}

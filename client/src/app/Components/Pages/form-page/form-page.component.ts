import { Component, OnInit } from '@angular/core';
import { Library } from 'src/app/models/library';
import {FormControl, Validators} from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/errors/errorMatcher';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent implements OnInit {

  library:Library;

  constructor() { }

  ngOnInit(): void {

    this.library = {
      name:'',
      description:'',
      template:'grid',
      camera:false,
      location:false,
      private:false
    }

  }

  nameFormControl = new FormControl('', [Validators.required,]);
  matcher = new MyErrorStateMatcher();

  onSubmit(){ 
    console.log(this.library);
    
  }

}

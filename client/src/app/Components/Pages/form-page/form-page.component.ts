import { Component, OnInit } from '@angular/core';
import { Library } from 'src/app/models/library';

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

  onSubmit(){ 
    console.log(this.library);
    
  }

}

import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import {FormControl, Validators} from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/errors/errorMatcher';


@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  constructor(private _categoryService: CategoryService) { }

  ngOnInit(): void {
  }

  captionFormControl = new FormControl('', [Validators.required,]);
  matcher = new MyErrorStateMatcher();

  onSubmit=async(value)=>{
    try{
      await this._categoryService.appendCategory(value);
    } catch(err){
      console.log(err);
    }
  }


}

import { Component, OnInit } from '@angular/core';
import { TaggoleCategoryModalService } from 'src/app/services/taggoles/taggole-category-modal.service';
import { CategoryService } from 'src/app/services/category.service';


@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  visible:boolean = false;

  constructor(private _modal:TaggoleCategoryModalService, private _categoryService: CategoryService) { }

  ngOnInit(): void {
    this._modal.taggleModal.subscribe((res)=>{this.visible = res;})
  }

  onSubmit(value){ 
    console.log(value);
    this._categoryService.appendCategory(value);
    
  }

  close():void{
    this.visible = false;
  }

}

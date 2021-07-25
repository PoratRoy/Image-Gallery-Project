import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import {TaggoleModalService} from '../../../services/taggole-modal.service';


@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  visible:boolean = false;
  category:Category;

  constructor(private modal:TaggoleModalService) { }

  ngOnInit(): void {
    this.modal.taggleModal.subscribe((res)=>{this.visible = res;})
  }

  close():void{
    this.visible = false;
  }

}

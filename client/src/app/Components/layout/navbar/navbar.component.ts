import { Component, OnInit } from '@angular/core';
import { TaggoleCategoryModalService } from 'src/app/services/taggoles/taggole-category-modal.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private modal:TaggoleCategoryModalService) { }

  ngOnInit(): void {}

  taggleModal():void{
    this.modal.taggle();
  }

}

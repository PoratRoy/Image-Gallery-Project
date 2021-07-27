import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCategoryComponent } from '../../elements/add-category/add-category.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public _dialog: MatDialog) { }

  ngOnInit(): void {}

  taggleModal():void{
    let ref = this._dialog.open(AddCategoryComponent)
  }

}

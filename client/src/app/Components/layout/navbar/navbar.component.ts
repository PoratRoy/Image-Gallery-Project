import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCategoryComponent } from '../../elements/add-category/add-category.component';
import { FormEnterPrivateComponent } from '../../elements/private-mode/form-enter-private/form-enter-private.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public _dialog: MatDialog) { }

  ngOnInit(): void {}

  taggleCategoryModal():void{
    let ref = this._dialog.open(AddCategoryComponent)
  }

  tagglePrivateModal():void{
    let ref = this._dialog.open(FormEnterPrivateComponent)
  }

}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImagesService } from 'src/app/services/images.service';
import { AddCategoryComponent } from '../../elements/add-category/add-category.component';
import { FormEnterPrivateComponent } from '../../elements/private-mode/form-enter-private/form-enter-private.component';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {


  constructor(public _dialog: MatDialog, private _images: ImagesService) { }

  ngOnInit(): void {}

  taggleCategoryModal():void{
    let ref = this._dialog.open(AddCategoryComponent)
  }

  tagglePrivateModal():void{
    let ref = this._dialog.open(FormEnterPrivateComponent)
  }

  imagesNoPrivate():void{
    this._images.displayNoPrivateImages();
  }

}

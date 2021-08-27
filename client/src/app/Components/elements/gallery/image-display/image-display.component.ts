import { Component, OnInit, Input } from '@angular/core';
import { Image } from 'src/app/models/Image';
import { MatDialog } from '@angular/material/dialog';
import { ModalDetailsComponent } from '../modal-details/modal-details.component';



@Component({
  selector: 'app-image-display',
  templateUrl: './image-display.component.html',
  styleUrls: ['./image-display.component.css']
})
export class ImageDisplayComponent implements OnInit {

  @Input() image: Image;  

  constructor(public _dialog: MatDialog) { }

  ngOnInit(): void {}

  taggleModal():void{
    this._dialog.open(ModalDetailsComponent, {data:{image : this.image} })
  }

}

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
  d : any;


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {}

  taggleModal():void{

    this.d = {image : this.image}  
    let ref = this.dialog.open(ModalDetailsComponent, {data:this.d})
      //ref.afterClosed().subscribe(res=>{console.log(res);})
  }

}

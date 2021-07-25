import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalDetailsComponent } from '../../elements/gallery/modal-details/modal-details.component';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

    constructor(public dialog: MatDialog) {}

    ngOnInit() {}


    open(){
      let ref = this.dialog.open(ModalDetailsComponent, {data:{name:'roy'}})
      ref.afterClosed().subscribe(res=>{console.log(res);
      })
    }
}

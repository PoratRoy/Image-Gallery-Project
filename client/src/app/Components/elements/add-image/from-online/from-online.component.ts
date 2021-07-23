import { Component, OnInit } from '@angular/core';
import { PexelImagesService } from 'src/app/services/pexel-images.service';

@Component({
  selector: 'app-from-online',
  templateUrl: './from-online.component.html',
  styleUrls: ['./from-online.component.css']
})
export class FromOnlineComponent implements OnInit {

  images:string[]

  constructor(private _pexelImages:PexelImagesService) {}

  ngOnInit(): void {
  }

  search($event){
    this._pexelImages.getData($event).subscribe((data)=>{
      this.images = data.photos;
    },(error)=>{
      console.log(error);
    })
  }

}

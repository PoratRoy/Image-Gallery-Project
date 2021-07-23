import { Component, OnInit } from '@angular/core';
import { PexelImagesService } from 'src/app/services/pexel-images.service';

@Component({
  selector: 'app-from-online',
  templateUrl: './from-online.component.html',
  styleUrls: ['./from-online.component.css']
})
export class FromOnlineComponent implements OnInit {

  search:string;
  images:string[]

  constructor(private _pexelImages:PexelImagesService) { 
    this._pexelImages.getData(this.search)
  }

  ngOnInit(): void {
  }

  searchPhotos(){
    this._pexelImages.getData(this.search).subscribe((data)=>{
      this.images = data.photos;
    },(error)=>{
      console.log(error);
    })
  }

}

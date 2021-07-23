import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/models/Image';
import { ImagesService } from '../../../../services/images.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  categories = ['A','B','C','D'];
  constructor(private _images : ImagesService) { }

  ngOnInit(): void {
  }

  searchByCategory(value){
    console.log(value);
  }
  
  searchByText(value){
    console.log(value);
  }
  
  search($event){
    console.log($event);
  }


  private(){
    this._images.getImageByPrivate().subscribe(
      data => console.log(data),
      error => console.log(error)
    )
  }

  favorite(){

  }

}




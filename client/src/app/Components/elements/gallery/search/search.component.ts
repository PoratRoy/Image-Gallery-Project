import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Image } from 'src/app/models/Image';
import { ImagesService } from '../../../../services/images.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() filterImages = new EventEmitter<any>();

  categories = ['A','B','C','D'];
  
  selectedCategory:string = '';
  searchedCaption:string = '';

  constructor(private _images : ImagesService) { }

  ngOnInit(): void {
  }

  searchByCategory(value){
    this.selectedCategory=value;
  }
  
  searchByText(value){
    this.searchedCaption = value;
    
    this._images.getImageByCaptionAndCategory({
      categories:this.selectedCategory,
      caption:this.searchedCaption
    }).subscribe(
      data => {this.filterImages.emit(data)},
      error => console.log(error))
  }


  private(){
    
    this._images.getImageByPrivate().subscribe(
      data => {this.filterImages.emit(data)},
      error => console.log(error)
    )
  }

  favorite(){
    this._images.getImageByFavorite().subscribe(
      data => {this.filterImages.emit(data)},
      error => console.log(error)
    )
  }

}




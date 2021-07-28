import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Image } from 'src/app/models/Image';
import { CategoryService } from 'src/app/services/category.service';
import { ImagesService } from '../../../../services/images.service';
import { SearchService } from 'src/app/services/search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() filterImages = new EventEmitter<any>();

  categories: string[];
  selectedCategory:string = '';

  constructor(private _images : ImagesService, private _categories : CategoryService, private _search : SearchService) { }

  ngOnInit(): void {
    this._categories.getAllCategories().subscribe((c)=>{
      this.categories = c;
    })
  }

  searchByCategory(value : string){

    this._search.searchByCategory(value);
  }
  
  searchByText(value : string){

    this._search.searchByText(value);

    this.selectedCategory = '';
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




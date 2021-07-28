import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-text',
  templateUrl: './search-text.component.html',
  styleUrls: ['./search-text.component.css']
})
export class SearchTextComponent implements OnInit {

  @Output() searchOutput = new EventEmitter<string>()

  value:string;

  constructor(private _search: SearchService) { }

  ngOnInit(): void {
    this.value = '';

    this._search.nullCaptionSearch.subscribe((text)=>{
      
      this.value = 'rror';
      console.log('e'+this.value+'w');
    })
  }

  searchPhotos(text){
    this.searchOutput.emit(text);
  }

}

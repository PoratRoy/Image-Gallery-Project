import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-text',
  templateUrl: './search-text.component.html',
  styleUrls: ['./search-text.component.css']
})
export class SearchTextComponent implements OnInit {

  @Output() searchOutput = new EventEmitter<string>()

  constructor() { }
  ngOnInit(): void {}

  searchPhotos(text){
    this.searchOutput.emit(text);
  }

}

import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/models/Image';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  categories = ['A','B','C','D'];
  image:Image;
  constructor() { }

  ngOnInit(): void {
  }

}

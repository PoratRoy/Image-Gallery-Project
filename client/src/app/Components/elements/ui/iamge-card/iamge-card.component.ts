import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-iamge-card',
  templateUrl: './iamge-card.component.html',
  styleUrls: ['./iamge-card.component.css']
})
export class IamgeCardComponent implements OnInit {

  @Input() imageSrc : string;
  constructor() { }

  ngOnInit(): void {
  }

}

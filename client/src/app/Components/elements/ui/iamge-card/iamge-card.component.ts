import { Component, Input, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-iamge-card',
  templateUrl: './iamge-card.component.html',
  styleUrls: ['./iamge-card.component.css']
})
export class IamgeCardComponent implements OnInit {

  @Input() imageSrc : string;
  myScrollContainer!: HTMLElement;
  defaultImage = 'https://miro.medium.com/max/441/1*9EBHIOzhE1XfMYoKz1JcsQ.gif';
  
  constructor(private elmRef: ElementRef) { }

  ngOnInit(): void {
    this.myScrollContainer = this.elmRef.nativeElement.querySelector('#my-scroll-container');
  }

}

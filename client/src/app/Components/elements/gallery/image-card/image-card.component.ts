import { Component, OnInit, Input } from '@angular/core';
import { Image } from 'src/app/models/Image';
import {TaggoleModalService} from '../../../../services/taggole-modal.service';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css']
})
export class ImageCardComponent implements OnInit {

  @Input() image: Image;

  constructor(private modal:TaggoleModalService) { }

  ngOnInit(): void {
  }

  taggleModal():void{
    this.modal.taggle();
    this.modal.setImage(this.image);
  }

}

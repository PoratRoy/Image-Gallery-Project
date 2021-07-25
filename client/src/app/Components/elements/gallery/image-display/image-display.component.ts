import { Component, OnInit, Input } from '@angular/core';
import { Image } from 'src/app/models/Image';
import {TaggoleModalService} from '../../../../services/taggoles/taggole-modal.service';

@Component({
  selector: 'app-image-display',
  templateUrl: './image-display.component.html',
  styleUrls: ['./image-display.component.css']
})
export class ImageDisplayComponent implements OnInit {

  @Input() image: Image;

  constructor(private modal:TaggoleModalService) { }

  ngOnInit(): void {}

  taggleModal():void{
    this.modal.taggle();
    this.modal.setImage(this.image);
  }

}

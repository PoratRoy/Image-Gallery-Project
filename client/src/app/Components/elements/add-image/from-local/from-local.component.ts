import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-from-local',
  templateUrl: './from-local.component.html',
  styleUrls: ['./from-local.component.css']
})
export class FromLocalComponent implements OnInit {
  
  @Output() getImage = new EventEmitter<[any,any]>();
  localImage: Observable<any>;
  iamgeCaption: string = '';
  
  constructor() { }
  ngOnInit(): void {}

  onFileChanged($event: Event) {
    const file = ($event.target as HTMLInputElement).files[0];
    this.iamgeCaption = file.name;
    this.convertToBase64(file);
  }

  convertToBase64(file: File) {
    this.localImage = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });
    this.localImage.subscribe(image=>{this.getImage.emit([image,this.iamgeCaption]);})
  }

  readFile(file: File, subscriber: Subscriber<any>) {
    const filereader = new FileReader();
    filereader.readAsDataURL(file);

    filereader.onload = () => {
      subscriber.next(filereader.result);
      subscriber.complete();
    };
    filereader.onerror = (error) => {
      subscriber.error(error);
      subscriber.complete();
    };
  }

}

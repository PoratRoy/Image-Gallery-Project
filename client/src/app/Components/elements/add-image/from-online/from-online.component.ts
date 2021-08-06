import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { PexelImagesService } from 'src/app/services/pexel-images.service';

@Component({
  selector: 'app-from-online',
  templateUrl: './from-online.component.html',
  styleUrls: ['./from-online.component.css']
})
export class FromOnlineComponent implements OnInit {

  @Output() getImage = new EventEmitter<[any,any]>();
  images:string[]

  constructor(private _pexelImages:PexelImagesService) {}

  ngOnInit(): void {
  }

  search($event){
    this._pexelImages.getData($event).subscribe((data)=>{
      this.images = data.photos;
    },(error)=>{
      console.log(error);
    })
  }

  selected(url){

    let iamgeCaption:string[] = url.split('photos/',2);
    iamgeCaption = iamgeCaption[1].split('.jpeg',2);
    iamgeCaption = iamgeCaption[0].split('/',2);

    this.getBase64ImageFromUrl(url).then(base64 => {
      this.getImage.emit([base64,iamgeCaption[1]+".jpg"]);
    })
  }

  async getBase64ImageFromUrl(imageUrl) {
    var res = await fetch(imageUrl);
    var blob = await res.blob();
    return new Promise((resolve, reject) => {
      var reader  = new FileReader();
      reader.addEventListener("load", function () {
        
          resolve(reader.result);
      }, false);
      reader.onerror = () => {
        return reject(this);
      };
      reader.readAsDataURL(blob);
    })
  }


}

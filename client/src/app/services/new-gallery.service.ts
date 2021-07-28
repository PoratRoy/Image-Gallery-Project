import { Injectable } from '@angular/core';
import { Gallery } from '../models/gallery';

@Injectable({
  providedIn: 'root'
})
export class NewGalleryService {

  gallery:Gallery

  constructor() { }

  create(newGallery:Gallery){
    this.gallery = newGallery;

    console.log(newGallery);
  }

  getGallery():Gallery{
    return this.gallery;
  }


}

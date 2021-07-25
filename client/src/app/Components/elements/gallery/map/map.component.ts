import { Component, OnInit, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Input() latitude: number;
  @Input() longitude: number;

  lat:number;
  lon:number;
  locationChosen:boolean = false;

  constructor(@Inject(MAT_DIALOG_DATA) private data:any) { }

  ngOnInit(): void {
    this.lat = +this.data.latitude;
    this.lon = +this.data.longitude;
  }

  onChoseLocation($event) {
    this.lat = $event.coords.lat;
    this.lon = $event.coords.lng;
    this.locationChosen = true;
  }

  
}

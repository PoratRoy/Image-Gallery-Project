import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Input() latitude: number;
  @Input() longitude: number;
  @Output() coords = new EventEmitter<[number,number]>()

  lat:number;
  lon:number;
  locationChosen:boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.lat = this.latitude;
    this.lon = this.longitude;
  }

  onChoseLocation($event) {
    this.lat = $event.coords.lat;
    this.lon = $event.coords.lng;
    this.locationChosen = true;

    this.coords.emit([this.lat,this.lon])
  }

  
}

import {AfterViewInit, Component, ViewChild, Input} from '@angular/core';
import { Image } from 'src/app/models/Image';
import { MatDialog } from '@angular/material/dialog';
import { MOCK_IMG } from 'src/app/mock-images';
import { MapComponent } from '../map/map.component';
import { FullImageComponent } from '../full-image/full-image.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements AfterViewInit {

  @Input() data: Image[];
  images : MatTableDataSource<Image>;
  displayedColumns: string[];

  constructor(public _dialog: MatDialog) { }

  ngOnInit(): void {
    this.images = new MatTableDataSource<Image>(this.data);
    this.displayedColumns = ['caption', 'image', 'categories', 'location', 'favorite', 'private'];
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.images.paginator = this.paginator;
  }

  taggleMap(){
    const loc = this.images.filteredData[0].location;
    this._dialog.open(MapComponent, {data:{latitude: loc[0], longitude: loc[1]}})
  }

  taggleImage(){
    this._dialog.open(FullImageComponent, {data:{src:this.images.filteredData[0].src}})
  }

}

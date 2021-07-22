import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.css']
})
export class HamburgerComponent implements OnInit {

  // //isMenuOpen : boolean = false; //also in the app....
  // constructor() { }
  // ngOnInit(): void {
  // }
  // public onSidenavClick(): void {
  //   this.isMenuOpen = false;
  // }

  @Output() sidenavClose = new EventEmitter();
  constructor() { }
  ngOnInit() {
  }
  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

}

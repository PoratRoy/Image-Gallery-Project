import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/errors/errorMatcher';
import { PrivateModeService } from 'src/app/services/private-mode.service';

@Component({
  selector: 'app-form-enter-private',
  templateUrl: './form-enter-private.component.html',
  styleUrls: ['./form-enter-private.component.css']
})
export class FormEnterPrivateComponent implements OnInit {

  password: string;
  hide: boolean = true;

  constructor(private _permission : PrivateModeService) { }

  ngOnInit(): void {
  }

  privateFormControl = new FormControl('', [Validators.required,]);
  matcher = new MyErrorStateMatcher();

  onSubmit(value){ 
    this._permission.enterPrivateMode(value);
  }

}

import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/errors/errorMatcher';
import { PrivateModeService } from 'src/app/services/private-mode.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-form-enter-private',
  templateUrl: './form-enter-private.component.html',
  styleUrls: ['./form-enter-private.component.css']
})
export class FormEnterPrivateComponent implements OnInit {

  pass: string='';
  hide: boolean = true;
  invalidAttempt: boolean = false;

  constructor(private _permission : PrivateModeService, public dialogRef: MatDialogRef<FormEnterPrivateComponent>) { }

  ngOnInit(): void {
    this.invalidAttempt = false;
  }

  privateFormControl = new FormControl('', [Validators.required,]);
  matcher = new MyErrorStateMatcher();

  onSubmit(value){ 
    const res = this._permission.enterPrivateMode(value)
    //console.log(res);
    
    if(res){
      this.dialogRef.close();
      this.invalidAttempt = false;
    }else{
      console.log('enter');
      
      this.invalidAttempt = true;
      this.pass = 'sssss';
    }
  }

}



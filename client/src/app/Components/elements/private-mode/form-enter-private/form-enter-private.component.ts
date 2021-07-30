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

  hide: boolean = true;
  invalidAttempt: boolean = false;

  constructor(private _permission : PrivateModeService, public dialogRef: MatDialogRef<FormEnterPrivateComponent>) { }

  ngOnInit(): void {
    this.invalidAttempt = false;
  }

  privateFormControl = new FormControl('', [Validators.required]);
  matcher = new MyErrorStateMatcher();

  onSubmit(value){ 
    const res = this._permission.enterPrivateMode(value)
    
    if(res){
      this.dialogRef.close();
      this.invalidAttempt = false;
    }else{
      this.privateFormControl.setValue('');
      this.invalidAttempt = true;
    }
  }
}



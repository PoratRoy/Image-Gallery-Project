import { AbstractControl, FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class PasswordValidator implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
      const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);
  
      return (invalidCtrl || invalidParent);
    }
  }

export function passwordValidator(control: AbstractControl): {[key:string]:any} | null{
    const match = /popo/.test(control.value);
    return match ? { 'forbiddenPassword': {value: control.value}} : null;
}


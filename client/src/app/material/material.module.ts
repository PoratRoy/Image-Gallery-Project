import { NgModule } from '@angular/core';


import { MatListModule } from '@angular/material/list';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCommonModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';

const MaterialComponents =[
  BrowserAnimationsModule,
  MatButtonToggleModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatCommonModule,
  MatDialogModule,
  MatSelectModule,
  MatInputModule,
  MatRadioModule,
  MatTabsModule,
  MatCardModule,
  MatIconModule,
]

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents],
})
export class MaterialModule { }

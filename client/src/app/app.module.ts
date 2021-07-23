import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';

import { GalleryDetailsPageComponent } from './Components/Pages/gallery-details-page/gallery-details-page.component';
import { ModalDetailsComponent } from './Components/elements/gallery/modal-details/modal-details.component';
import { ImageDisplayComponent } from './Components/elements/gallery/image-display/image-display.component';
import { FromOnlineComponent } from './Components/elements/add-image/from-online/from-online.component';
import { FromCameraComponent } from './Components/elements/add-image/from-camera/from-camera.component';
import { FromLocalComponent } from './Components/elements/add-image/from-local/from-local.component';
import { AddImagePageComponent } from './Components/Pages/add-image-page/add-image-page.component';
import { IamgeCardComponent } from './Components/elements/ui/iamge-card/iamge-card.component';
import { OptionsPageComponent } from './Components/Pages/options-page/options-page.component';
import { GalleryPageComponent } from './Components/Pages/gallery-page/gallery-page.component';
import { SearchComponent } from './Components/elements/gallery/search/search.component';
import { HamburgerComponent } from './Components/layout/hamburger/hamburger.component';
import { MapComponent } from './Components/elements/gallery/map/map.component';
import { NavbarComponent } from './Components/layout/navbar/navbar.component';
import { IndexComponent } from './Components/Pages/index/index.component';
import { AppComponent } from './components/appComponent/app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule} from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { WebcamModule } from 'ngx-webcam';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    GalleryDetailsPageComponent,
    ImageDisplayComponent,
    ModalDetailsComponent,
    AddImagePageComponent,
    OptionsPageComponent,
    GalleryPageComponent,
    FromCameraComponent,
    FromOnlineComponent,
    HamburgerComponent,
    FromLocalComponent,
    IamgeCardComponent,
    SearchComponent,
    NavbarComponent,
    IndexComponent,
    AppComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    WebcamModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAEOO6OuHJfExPwJAdBY4gw3LfceDT4AeQ'
    })
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

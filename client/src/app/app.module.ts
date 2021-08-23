import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';

import { FormEnterPrivateComponent } from './Components/elements/private-mode/form-enter-private/form-enter-private.component';
import { ModalDetailsComponent } from './Components/elements/gallery/modal-details/modal-details.component';
import { ImageDisplayComponent } from './Components/elements/gallery/image-display/image-display.component';
import { FromOnlineComponent } from './Components/elements/add-image/from-online/from-online.component';
import { FromCameraComponent } from './Components/elements/add-image/from-camera/from-camera.component';
import { FromLocalComponent } from './Components/elements/add-image/from-local/from-local.component';
import { GalleryLayoutComponent } from './Components/layout/gallery-layout/gallery-layout.component';
import { AddImagePageComponent } from './Components/Pages/add-image-page/add-image-page.component';
import { FullImageComponent } from './Components/elements/gallery/full-image/full-image.component';
import { ImageListComponent } from './Components/elements/gallery/image-list/image-list.component';
import { SearchTextComponent } from './Components/elements/ui/search-text/search-text.component';
import { AddCategoryComponent } from './Components/elements/add-category/add-category.component';
import { IamgeCardComponent } from './Components/elements/ui/iamge-card/iamge-card.component';
import { GalleryPageComponent } from './Components/Pages/gallery-page/gallery-page.component';
import { CarouselComponent } from './Components/elements/gallery/carousel/carousel.component';
import { SearchComponent } from './Components/elements/gallery/search/search.component';
import { AboutPageComponent } from './Components/Pages/about-page/about-page.component';
import { FormPageComponent } from './Components/Pages/form-page/form-page.component';
import { SideNavComponent } from './Components/layout/side-nav/side-nav.component';
import { MapComponent } from './Components/elements/gallery/map/map.component';
import { CardComponent } from './Components/elements/ui/card/card.component';
import { IndexComponent } from './Components/Pages/index/index.component';
import { AppComponent } from './components/appComponent/app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MaterialModule } from './material/material.module';
import { LazyLoadImageModule} from 'ng-lazyload-image';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { WebcamModule } from 'ngx-webcam';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    FormEnterPrivateComponent,
    ImageDisplayComponent,
    ModalDetailsComponent,
    AddImagePageComponent,
    GalleryPageComponent,
    AddCategoryComponent,
    FromCameraComponent,
    FromOnlineComponent,
    SearchTextComponent,
    FromLocalComponent,
    IamgeCardComponent,
    AboutPageComponent,
    FormPageComponent,
    SearchComponent,
    IndexComponent,
    AppComponent,
    MapComponent,
    CardComponent,
    CarouselComponent,
    SideNavComponent,
    GalleryLayoutComponent,
    ImageListComponent,
    FullImageComponent,
  ],
  entryComponents:[
    FormEnterPrivateComponent,
    ModalDetailsComponent,
    AddCategoryComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    WebcamModule,
    HttpClientModule,
    FormsModule,
    MatCarouselModule,
    LazyLoadImageModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: environment.MAP_API_KEY
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

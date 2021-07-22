import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {IndexComponent} from './Components/Pages/index/index.component';
import {AddImagePageComponent} from './Components/Pages/add-image-page/add-image-page.component';
import {GalleryDetailsPageComponent} from './Components/Pages/gallery-details-page/gallery-details-page.component';
import {GalleryPageComponent} from './Components/Pages/gallery-page/gallery-page.component';
import {OptionsPageComponent} from './Components/Pages/options-page/options-page.component';


const routes: Routes = [
  {path: 'home', component: IndexComponent},
  {path: 'addImage', component: AddImagePageComponent},
  {path: 'details', component: GalleryDetailsPageComponent},
  {path: 'gallery', component: GalleryPageComponent},
  {path: 'options', component: OptionsPageComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

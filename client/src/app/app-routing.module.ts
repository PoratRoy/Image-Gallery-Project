import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {IndexComponent} from './Components/Pages/index/index.component';
import {AddImagePageComponent} from './Components/Pages/add-image-page/add-image-page.component';
import {GalleryPageComponent} from './Components/Pages/gallery-page/gallery-page.component';
import {FormPageComponent} from './Components/Pages/form-page/form-page.component';
import { AboutPageComponent } from './Components/Pages/about-page/about-page.component';

const routes: Routes = [
  {path: 'home', component: IndexComponent},
  {path: 'addImage', component: AddImagePageComponent},
  {path: 'gallery', component: GalleryPageComponent},
  {path: 'form', component: FormPageComponent},
  {path: 'about', component: AboutPageComponent},
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

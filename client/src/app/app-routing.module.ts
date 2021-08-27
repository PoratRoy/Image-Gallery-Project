import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {IndexComponent} from './Components/Pages/index/index.component';
import {AddImagePageComponent} from './Components/Pages/add-image-page/add-image-page.component';
import {GalleryPageComponent} from './Components/Pages/gallery-page/gallery-page.component';
import { GalleryLayoutComponent } from './Components/layout/gallery-layout/gallery-layout.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: IndexComponent},
  {path: 'gallery', component: GalleryLayoutComponent, children:[
    {path: '', redirectTo: 'view', pathMatch: 'full'},
    {path: 'view', component: GalleryPageComponent},
    {path: 'addImage', component: AddImagePageComponent},
  ]},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

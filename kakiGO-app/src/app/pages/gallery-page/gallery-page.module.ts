import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryPageRoutingModule } from './gallery-page-routing.module';
import { GalleryViewComponent } from './components/gallery-view/gallery-view.component';
import { GalleryIntroComponent } from './components/gallery-view/gallery-intro/gallery-intro.component';
import { RequestService } from 'src/app/service/request.service';
import { GalleryImagesComponent } from './components/gallery-view/gallery-images/gallery-images.component';


@NgModule({
  declarations: [
    GalleryViewComponent,
    GalleryIntroComponent,
    GalleryImagesComponent
  ],
  imports: [
    CommonModule,
    GalleryPageRoutingModule
  ],
  providers: [RequestService]
})
export class GalleryPageModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutPageRoutingModule } from './about-page-routing.module';
import { AboutViewComponent } from './components/about-view/about-view.component';
import { AboutHeroComponent } from './components/about-view/about-hero/about-hero.component';
import { RequestService } from 'src/app/service/request.service';


@NgModule({
  declarations: [
    AboutViewComponent,
    AboutHeroComponent
  ],
  imports: [
    CommonModule,
    AboutPageRoutingModule
  ],
  providers: [RequestService]
})
export class AboutPageModule { }

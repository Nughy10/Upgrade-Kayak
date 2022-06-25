import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module'
import { HomeService } from './services/home.service';

import { HomeViewComponent } from './components/home-view/home-view.component';
import { HomeHeroComponent } from './components/home-view/home-hero/home-hero.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HomeViewComponent,
    HomeHeroComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    HttpClientModule,
  ],
  providers: [HomeService]
})
export class HomePageModule { }

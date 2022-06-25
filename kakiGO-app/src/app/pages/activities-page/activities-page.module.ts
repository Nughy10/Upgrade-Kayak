import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivitiesPageRoutingModule } from './activities-page-routing.module';
import { ActivitiesViewComponent } from './components/activities-view/activities-view.component';
import { ActivitiesMainComponent } from './components/activities-view/activities-main/activities-main.component';
import { RequestService } from 'src/app/service/request.service';


@NgModule({
  declarations: [
    ActivitiesViewComponent,
    ActivitiesMainComponent
  ],
  imports: [
    CommonModule,
    ActivitiesPageRoutingModule
  ],
  providers: [RequestService],
})
export class ActivitiesPageModule { }

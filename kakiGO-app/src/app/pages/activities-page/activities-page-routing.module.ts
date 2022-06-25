import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesViewComponent } from './components/activities-view/activities-view.component';

const routes: Routes = [
  {
    path: "", component: ActivitiesViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivitiesPageRoutingModule { }

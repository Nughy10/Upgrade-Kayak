import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryViewComponent } from './components/gallery-view/gallery-view.component';

const routes: Routes = [
  {
    path: "", component: GalleryViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryPageRoutingModule { }

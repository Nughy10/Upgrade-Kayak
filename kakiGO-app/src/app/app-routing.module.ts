import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home-page/home-page.module').then(module => module.HomePageModule)
  },
  {
    path: 'activities',
    loadChildren: () => import('./pages/activities-page/activities-page.module').then(module => module.ActivitiesPageModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./pages/gallery-page/gallery-page.module').then(module => module.GalleryPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about-page/about-page.module').then(module => module.AboutPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

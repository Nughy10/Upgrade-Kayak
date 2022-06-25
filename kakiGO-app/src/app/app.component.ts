import { Component } from '@angular/core';

import { Ifooter, Iheader } from './models/iapp';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'KakiGO-app'

  public header: Iheader[] = [
    {
      name: 'HOME',
      navigate: '/home'
    },
    {
      name: 'ACTIVITIES',
      navigate: '/activities'
    },
    {
      name: 'GALLERY',
      navigate: '/gallery'
    },
    {
      name: 'ABOUT',
      navigate: '/about'
    }
  ];
  public footer: Ifooter = {
    copyright: '@KakiGO',
    rrss: [
      {
        name: 'Facebook',
        icon: '../assets/icones/facebook.svg',
        link: 'https://es-es.facebook.com/'
      },
      {
        name: 'Instagram',
        icon: '../assets/icones/logotipo-de-instagram.svg',
        link: 'https://www.instagram.com/'
      }
    ]
  }
}

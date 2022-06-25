import { Component, OnInit, Input } from '@angular/core';
import { IhomePage } from '../../../models/ihome-page';

@Component({
  selector: 'app-home-hero',
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.scss']
})
export class HomeHeroComponent implements OnInit {

  @Input() public hero?: IhomePage;

  constructor() { }

  ngOnInit(): void {
  }

}

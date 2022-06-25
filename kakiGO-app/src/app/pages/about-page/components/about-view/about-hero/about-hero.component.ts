import { Component, Input, OnInit } from '@angular/core';
import { Iabout } from '../../../models/iabout';

@Component({
  selector: 'app-about-hero',
  templateUrl: './about-hero.component.html',
  styleUrls: ['./about-hero.component.scss']
})
export class AboutHeroComponent implements OnInit {
  @Input() public about?:Iabout;
  constructor() { }

  ngOnInit(): void {
  }

}

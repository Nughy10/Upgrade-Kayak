import { Component, OnInit, Input } from '@angular/core';
import { Iactivities } from '../../../models/iactivities';

@Component({
  selector: 'app-activities-main',
  templateUrl: './activities-main.component.html',
  styleUrls: ['./activities-main.component.scss']
})
export class ActivitiesMainComponent implements OnInit {
  @Input() public activity?: Iactivities;
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-activities-view',
  templateUrl: './activities-view.component.html',
  styleUrls: ['./activities-view.component.scss']
})
export class ActivitiesViewComponent implements OnInit {
  public activities?: any;
  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
    this.getActivities();
  }

  public getActivities() {
    this.requestService.getRequest('activities').subscribe((dataActivities: any) => {
      this.activities = dataActivities;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-about-view',
  templateUrl: './about-view.component.html',
  styleUrls: ['./about-view.component.scss']
})
export class AboutViewComponent implements OnInit {
  public about?: any;
  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
    this.getAbout();
  }

  public getAbout() {
    this.requestService.getRequest('about').subscribe((dataAbout: any) => {
      this.about = dataAbout;
    })
  }

}

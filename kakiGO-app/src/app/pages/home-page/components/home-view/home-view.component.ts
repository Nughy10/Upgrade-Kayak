import { Component, OnInit } from '@angular/core';
import { IhomePage } from '../../models/ihome-page';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {
  // Variable donde guardaremos la info
  public homeContent?: any;

  constructor(private readonly homeService: HomeService) { }

  ngOnInit(): void {
    this.getInfoHome();
  }

  // FUNCION QUE SE CONECTA CON EL REQUEST SERVICE Y PIDE LA INFO DE LA HOME
  public getInfoHome(): IhomePage | undefined {
    this.homeService.getHome().subscribe((data: any ) => {
      this.homeContent = this.transformData(data)
    });
    return this.homeContent
  }

  private transformData(data: any): IhomePage {
    return {
        title: data.title,
        intro: data.intro,
        description: data.description,
      }
    
  }
}

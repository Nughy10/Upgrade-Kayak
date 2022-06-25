import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/service/request.service';



@Component({
  selector: 'app-gallery-view',
  templateUrl: './gallery-view.component.html',
  styleUrls: ['./gallery-view.component.scss']
})
export class GalleryViewComponent implements OnInit {
  public gallery?: any;
  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
    this.getGallery();
  }

  public getGallery() {
    this.requestService.getRequest('gallery').subscribe((dataGallery: any) => {
      this.gallery = dataGallery;
    })
  }


}

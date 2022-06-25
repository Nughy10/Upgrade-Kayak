import { Component, OnInit, Input } from '@angular/core';
import { Igallery } from '../../../models/igallery';

@Component({
  selector: 'app-gallery-images',
  templateUrl: './gallery-images.component.html',
  styleUrls: ['./gallery-images.component.scss']
})
export class GalleryImagesComponent implements OnInit {
  @Input() public image?: Igallery;
  constructor() { }

  ngOnInit(): void {
  }

}

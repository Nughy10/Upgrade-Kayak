import { Component, Input, OnInit } from '@angular/core';
import { Ifooter } from 'src/app/models/iapp';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() public footer!: Ifooter;
  constructor() { }

  ngOnInit(): void {
  }

}

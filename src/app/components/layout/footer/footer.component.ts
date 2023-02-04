import { Component, Input, OnInit } from '@angular/core';
import { FooterData } from '../data-types.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() footerData! : FooterData;

  constructor() { }

  ngOnInit(): void {
  }

}

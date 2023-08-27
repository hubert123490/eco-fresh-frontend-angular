import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ResponsiveFilter } from './search-nav';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  responsiveFilter : ResponsiveFilter = new ResponsiveFilter();

  constructor() { }

  ngOnInit(): void {
  }
}

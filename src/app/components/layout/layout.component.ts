import { Component, OnInit } from '@angular/core';
import { NavigationData } from './data-types.interface';
import { navData } from './nav.config';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  navData : NavigationData = navData

  constructor() { }

  ngOnInit(): void {
  }
}

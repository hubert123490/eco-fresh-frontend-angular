import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ResponsiveFilter, Filter } from '../search-nav';

@Component({
  selector: 'app-top-search-nav',
  templateUrl: './top-search-nav.component.html',
  styleUrls: ['./top-search-nav.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ height: 0, opacity: 0 }),
        animate('0.5s ease-out', style({ height: '*', opacity: 1 })),
      ]),
      transition(':leave', [
        style({ height: '*', opacity: 1 }),
        animate('0.5s ease-in', style({ height: 0, opacity: 0 })),
      ]),
    ]),
  ],
})
export class TopSearchNavComponent implements OnInit {
  @Input() responsiveFilter?: ResponsiveFilter;
  @Output() toggleFilter = new EventEmitter();
  filter: Filter = new Filter();
  categories: string[];

  constructor() {
    this.categories = ['meat', 'fruits', 'vegetables', 'crops', 'others'];
  }

  ngOnInit(): void {}
}

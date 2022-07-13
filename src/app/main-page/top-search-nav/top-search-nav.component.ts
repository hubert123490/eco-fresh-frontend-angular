import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

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
  categories: string[];
  isMenuOpen: boolean;

  constructor() {
    this.categories = ['meat', 'fruits', 'vegetables', 'crops', 'others'];
    this.isMenuOpen = false;
  }

  ngOnInit(): void {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}

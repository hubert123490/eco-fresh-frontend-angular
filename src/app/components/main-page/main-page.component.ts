import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
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
export class MainPageComponent implements OnInit {
  width: number;
  height: number;
  isFilterOpen: boolean;

  constructor() { 
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.isFilterOpen = this.width > 768 ? true : false;
  }

  ngOnInit(): void {
  }

  onResize(event: Event): void {
    this.width = (<Window>event.target).innerWidth;
    this.height = (<Window>event.target).innerHeight;
    if (this.width > 768 && !this.isFilterOpen) {
      this.isFilterOpen = true;
    }
  }

  filterToggleHandler(): void {
    this.isFilterOpen = !this.isFilterOpen;
    if (this.width > 768) {
      this.isFilterOpen = true;
    }
  }
}

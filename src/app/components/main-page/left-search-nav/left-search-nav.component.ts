import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-search-nav',
  templateUrl: './left-search-nav.component.html',
  styleUrls: ['./left-search-nav.component.scss'],
})
export class LeftSearchNavComponent implements OnInit {
  categories: string[];
  minPrice : number;
  maxPrice : number;
  certifications: string[];
  producers: string[];

  constructor() {
    this.categories = ['meat', 'fruits', 'vegetables'];
    this.minPrice = 0;
    this.maxPrice = 10000;
    this.certifications = ['ECO', 'MAKO', 'OLF'];
    this.producers = ['Nestle', 'Kalk', 'Bids'];
  }

  ngOnInit(): void {}
}

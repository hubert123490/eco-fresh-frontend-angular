import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-search-nav',
  templateUrl: './top-search-nav.component.html',
  styleUrls: ['./top-search-nav.component.scss']
})
export class TopSearchNavComponent implements OnInit {
  categories : string[];
  isMenuOpen : boolean;

  constructor() { 
    this.categories = ['meat', 'fruits', 'vegetables', 'crops', 'others'];
    this.isMenuOpen = false;
  }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}

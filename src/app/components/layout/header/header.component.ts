import { Component, Input, OnInit } from '@angular/core';
import { HeaderData } from '../data-types.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() navData! : HeaderData;
  isMenuOpen: boolean;
  width: number;
  height: number;

  constructor() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.isMenuOpen = false;
  }

  ngOnInit(): void {}

  onResize(event: Event): void {
    this.width = (<Window>event.target).innerWidth;
    this.height = (<Window>event.target).innerHeight;
    if (this.width > 768 && this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }

  menuToggleHandler(): void {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.width > 768 && this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }

  isMenuOpenAndSmallScreen(): boolean {
    return this.isMenuOpen && this.width < 768;
  }

  getNavType(): object {
    return {
      'header__content--nav': true,
      isMenu: this.isMenuOpenAndSmallScreen(),
    };
  }
}

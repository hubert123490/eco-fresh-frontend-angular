import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @Input() slides: SlideInterface[] = [{ url: './../../../assets/landing-page/welcome.jpg', title: 'tmp' }];
  currentIndex: number = 0;

  constructor() {}

  ngOnInit(): void {}

  getCurrentSlideUrl(): string {
    return `url('${this.slides[this.currentIndex].url}')`;
  }
}

interface SlideInterface {
  url: string;
  title: string;
}

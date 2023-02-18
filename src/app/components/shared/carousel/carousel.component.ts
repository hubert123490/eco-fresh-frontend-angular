import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @Input() slides: SlideInterface[] | undefined = [];
  currentIndex: number = 0;

  constructor() {}

  ngOnInit(): void {}

  getCurrentSlideUrl(): string {
    return `url('${this.slides![this.currentIndex].url}')`;
  }

  goToNext(): void {
    const isLastSlide = this.currentIndex === this.slides!.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;
    this.currentIndex = newIndex;
  }

  goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide
      ? this.slides!.length - 1
      : this.currentIndex - 1;
    this.currentIndex = newIndex;
  }

  goToSlide(slideIndex: number): void {
    this.currentIndex = slideIndex;
  }

  isSlidesEmpty() : boolean {
    if(!this.slides) return true;
    return this.slides.length == 0;
  }
}

export interface SlideInterface {
  url: string;
}

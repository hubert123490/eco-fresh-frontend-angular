import { Component, Input, OnInit } from '@angular/core';
import { SlideInterface } from '../../shared/carousel/carousel.component';

@Component({
  selector: 'app-product-details-image',
  templateUrl: './product-details-image.component.html',
  styleUrls: ['./product-details-image.component.scss'],
})
export class ProductDetailsImageComponent implements OnInit {
  @Input() slides: SlideInterface[] = [];
  @Input() slide: string | null = null;

  constructor() {}

  ngOnInit(): void {
    if (this.slide) this.slides.push({ url: this.slide });
  }
}

import { style } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-range',
  templateUrl: './price-range.component.html',
  styleUrls: ['./price-range.component.scss'],
})
export class PriceRangeComponent implements OnInit {
  @Input() minPrice: number;
  @Input() maxPrice: number;
  currMin: number;
  currMax: number;
  priceGap: number;

  constructor() {
    this.minPrice = 0;
    this.maxPrice = 10000;
    this.currMin = 0;
    this.currMax = 10000;
    this.priceGap = 1000;
  }

  ngOnInit(): void {}

  minPriceHandler(event: any): void {
    if (this.currMax - this.currMin < this.priceGap) {
      this.currMin = +this.currMax - +this.priceGap;
    } else {
      this.currMin = parseInt(event.target.value);
    }
  }

  maxPriceHandler(event: any): void {
    if (this.currMax - this.currMin < this.priceGap) {
      this.currMax = +this.currMin + +this.priceGap;
    } else {
      this.currMax = parseInt(event.target.value);
    }
  }

  sliderProgress(): object {
    let left = (this.currMin / this.maxPrice) * 100;
    let right = 100 - (this.currMax / this.maxPrice) * 100;
    let styleLeft = left + '%';
    let styleRight = right + '%';

    return { left: styleLeft, right: styleRight };
  }
}

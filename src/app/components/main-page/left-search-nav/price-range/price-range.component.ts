import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-price-range',
  templateUrl: './price-range.component.html',
  styleUrls: ['./price-range.component.scss'],
})
export class PriceRangeComponent implements OnInit {
  @Output() currMinChange = new EventEmitter<number>();
  @Output() currMaxChange = new EventEmitter<number>();
  @Input() minPrice: number;
  @Input() maxPrice: number;
  currMin: number;
  currMax: number;
  priceGap: number;

  constructor() {
    this.minPrice = 0;
    this.maxPrice = 200;
    this.currMin = 0;
    this.currMax = 200;
    this.priceGap = 10;
  }

  ngOnInit(): void {}

  minPriceHandler(event: any): void {
    if (this.currMax - parseInt(event.target.value) < this.priceGap) {
      this.currMin = +this.currMax - +this.priceGap;
    } else if (parseInt(event.target.value) < this.minPrice) {
      this.currMin = this.minPrice;
    } else {
      this.currMin = parseInt(event.target.value);
    }
    this.currMinChange.emit(this.currMin);
  }

  maxPriceHandler(event: any): void {
    if (parseInt(event.target.value) - this.currMin < this.priceGap) {
      this.currMax = +this.currMin + +this.priceGap;
    } else if (parseInt(event.target.value) > this.maxPrice) {
      this.currMax = this.maxPrice;
    } else {
      this.currMax = parseInt(event.target.value);
    }
    this.currMaxChange.emit(this.currMax);
  }

  sliderProgress(): object {
    let left = (this.currMin / this.maxPrice) * 100;
    let right = 100 - (this.currMax / this.maxPrice) * 100;
    let styleLeft = left + '%';
    let styleRight = right + '%';

    return { left: styleLeft, right: styleRight };
  }
}

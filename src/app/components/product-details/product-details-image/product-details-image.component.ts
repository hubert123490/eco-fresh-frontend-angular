import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SlideInterface } from '../../shared/carousel/carousel.component';

@Component({
  selector: 'app-product-details-image',
  templateUrl: './product-details-image.component.html',
  styleUrls: ['./product-details-image.component.scss']
})
export class ProductDetailsImageComponent implements OnInit {
  @Input() slides : SlideInterface[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

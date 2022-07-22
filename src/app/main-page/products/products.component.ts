import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: any[];

  constructor() {
    this.products = [
      { title: 'test' },
      { title: 'test' },
      { title: 'test' },
      { title: 'test' },
      { title: 'test' },
      { title: 'test' },
    ];
  }

  ngOnInit(): void {}
}

import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { ProductDetails } from 'src/app/store/models/ProductDetails';
import { ModalComponent } from '../../shared/modal/modal.component';

@Component({
  selector: 'app-product-details-order',
  templateUrl: './product-details-order.component.html',
  styleUrls: ['./product-details-order.component.scss']
})
export class ProductDetailsOrderComponent implements OnInit {
  @Input() productDetails?: ProductDetails | null;
  @Output() addToCartEvent : EventEmitter<ProductDetails> = new EventEmitter();
  @ViewChild('modal') modal!: ModalComponent;

  constructor() { }

  ngOnInit(): void {
  }

  openModal() {
    this.modal.showModal();
  }
}

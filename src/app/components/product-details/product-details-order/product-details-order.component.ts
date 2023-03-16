import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartApiActions } from 'src/app/store/actions/cart.actions';
import { OrderApiActions } from 'src/app/store/actions/order.actions';
import { ProductDetails } from 'src/app/store/models/ProductDetails';
import { ModalComponent } from '../../shared/modal/modal.component';

@Component({
  selector: 'app-product-details-order',
  templateUrl: './product-details-order.component.html',
  styleUrls: ['./product-details-order.component.scss'],
})
export class ProductDetailsOrderComponent implements OnInit {
  @Input() productDetails?: ProductDetails | null;
  @Output() addToCartEvent: EventEmitter<ProductDetails> = new EventEmitter();
  @ViewChild('modal') modal!: ModalComponent;

  kcalChoice: string = '';
  selectedMealAmount: number = 0;

  constructor(private store: Store) {}

  ngOnInit(): void {}

  openModal() {
    this.modal.showModal(this.modalHandler);
  }

  modalHandler = () => {
    if (this.kcalChoice && this.selectedMealAmount) {
      this.store.dispatch(
        CartApiActions.addItem({
          request: {
            productId: this.productDetails!.productId,
            orderRequest: {
              kcalChoice: this.kcalChoice,
              mealsAmountChoice: this.selectedMealAmount,
            },
          },
        })
      );
    }
  };

  onOptionsChange() {
    if (this.kcalChoice && this.selectedMealAmount) {
      this.store.dispatch(
        OrderApiActions.loadOrder({
          productId: this.productDetails!.productId,
          orderRequest: {
            kcalChoice: this.kcalChoice,
            mealsAmountChoice: this.selectedMealAmount,
          },
        })
      );
    }
  }
}

import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { ModalComponent } from 'src/app/components/shared/modal/modal.component';
import { CartApiActions } from 'src/app/store/actions/cart.actions';
import { CartItem } from 'src/app/store/models/Cart';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.scss'],
})
export class CartProductComponent implements OnInit {
  @Input() cartItem: CartItem | undefined;
  @ViewChild('modal') modal!: ModalComponent;

  constructor(private store: Store) {}

  ngOnInit(): void {}

  openModal = () => {
    this.modal.showModal(this.removeCartItem);
  };

  increaseCartItemQuantity = () => {
    this.store.dispatch(
      CartApiActions.addItemQuantity({
        request: {
          productId: this.cartItem!.productId,
          orderRequest: this.cartItem!.orderRequest,
        },
      })
    );
  };

  reduceCartItemQuantity = () => {
    this.store.dispatch(
      CartApiActions.reduceItemQuantity({
        request: {
          productId: this.cartItem!.productId,
          orderRequest: this.cartItem!.orderRequest,
        },
      })
    );
  };

  removeCartItem = () => {
    this.store.dispatch(
      CartApiActions.removeItem({
        request: {
          productId: this.cartItem!.productId,
          orderRequest: this.cartItem!.orderRequest,
        },
      })
    );
  };
}

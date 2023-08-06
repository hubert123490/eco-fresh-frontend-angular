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
        productId: this.cartItem!.id,
      })
    );
  };

  reduceCartItemQuantity = () => {
    this.store.dispatch(
      CartApiActions.reduceItemQuantity({
        productId: this.cartItem!.id,
      })
    );
  };

  removeCartItem = () => {
    this.store.dispatch(
      CartApiActions.removeItem({
        productId: this.cartItem!.id,
      })
    );
  };
}

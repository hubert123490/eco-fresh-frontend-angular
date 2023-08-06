import { cartReducer } from './cart.reducer';
import { CartApiActions } from '../actions/cart.actions';
import { CartItem } from '../models/Cart';

describe('Cart Reducer', () => {
  let cartState : CartItem[];
  
  beforeEach(() => {
    cartState = [
        {
          id: '1',
          quantity: 1
        },
        {
          id: '2',
          quantity: 2
        }
      ]
  });
  
  it('adds item to cart when item is new', () => {
    const action = CartApiActions.addItem({ productId: '4', quantity: 4 });
    const state = cartReducer([...cartState], action);

    const expectedResult = [...cartState, {id : '4', quantity: 4}];

    expect(state).toEqual(expectedResult);
  });

  it('adds quantity to an item when item in cart exists', () => {
    const action = CartApiActions.addItem({
      productId: '1', quantity: 4
    });
    const state = cartReducer([ ...cartState ], action);

    const expectedResult = [
      {
        id: '1',
        quantity: 5
      },
      {
        id: '2',
        quantity: 2
      }
    ];

    expect(state).toEqual(expectedResult);
  });
});
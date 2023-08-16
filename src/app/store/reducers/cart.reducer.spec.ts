import { cartReducer } from './cart.reducer';
import { CartApiActions } from '../actions/cart.actions';
import { CartItem } from '../models/Cart';

describe('Cart Reducer', () => {
  let cartState : CartItem[];
  
  beforeEach(() => {
    cartState = [
        {
          id: '1',
          quantity: 1,
          name : 'test name 1',
          imageUrl: 'https://domain.image1.com'
        },
        {
          id: '2',
          quantity: 2,
          name : 'test name 2',
          imageUrl: 'https://domain.image2.com'
        }
      ]
  });
  
  it('adds item to cart when item is new', () => {
    const action = CartApiActions.addItem({ productId: '4', quantity: 4, name: 'test name 4', imageUrl: 'https://domain.image4.com' });
    const state = cartReducer([...cartState], action);

    const expectedResult = [...cartState, { id: '4', quantity: 4, name: 'test name 4', imageUrl: 'https://domain.image4.com' }];

    expect(state).toEqual(expectedResult);
  });

  it('adds quantity to an item when item in cart exists', () => {
    const action = CartApiActions.addItem({
      productId: '1', quantity: 4, name : 'test name 1',
      imageUrl: 'https://domain.image1.com'
    });
    const state = cartReducer([ ...cartState ], action);

    const expectedResult = [
      {
        id: '1',
        quantity: 5,
        name : 'test name 1',
        imageUrl: 'https://domain.image1.com'
      },
      {
        id: '2',
        quantity: 2,
        name : 'test name 2',
          imageUrl: 'https://domain.image2.com'
      }
    ];

    expect(state).toEqual(expectedResult);
  });
});
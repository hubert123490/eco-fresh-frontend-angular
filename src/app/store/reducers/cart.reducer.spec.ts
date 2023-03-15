import { cartReducer } from './cart.reducer';
import { CartApiActions } from '../actions/cart.actions';
import { Cart } from '../models/Cart';

describe('Cart Reducer', () => {
  let cartState : Cart;
  
  beforeEach(() => {
    cartState = {
      cartItems: [
        {
          productId: '0',
          orderRequest: {
            kcalChoice: '3000',
            mealsAmountChoice: 4,
          },
        },
      ],
      cartSummary: {
        totalPrice: 0,
        subTotal: 0,
        shipping: 0,
        tax: 0,
      },
    };
  });
  
  it('adds item to cart when item is new', () => {
    const action = CartApiActions.addItem({ request: addCartItemRequestNew });
    const state = cartReducer({ ...cartState }, action);
    const expectedResult = [...cartState.cartItems, addCartItemRequestNew];

    expect(state.cartItems).toEqual(expectedResult);
  });

  it('removes non existing item', () => {
    const action = CartApiActions.removeItem({
      request: removeCartItemRequestNotExisting,
    });
    const state = cartReducer({ ...cartState }, action);
    const expectedResult = [...state.cartItems];

    expect(state.cartItems).toEqual(expectedResult);
  });

  it('removes existing item', () => {
    const action = CartApiActions.removeItem({
      request: removeCartItemRequestExisting,
    });
    const state = cartReducer({ ...cartState }, action);
    const expectedResult: [] = [];

    expect(state.cartItems).toEqual(expectedResult);
  });

  it('adds item to cart when item exists (same productId and mealsAmountChoice)', () => {
    const action = CartApiActions.addItem({
      request: addCartItemRequestExisting,
    });
    const state = cartReducer({ ...cartState }, action);
    const expectedResult = [...expectedCartItemsExisting];

    expect(state.cartItems).toEqual(expectedResult);
  });

  it('adds quantity to existing item', () => {
    const action = CartApiActions.addItemQuantity({
      request: changeCartItemRequestExisting,
    });
    const state = cartReducer({ ...cartState }, action);
    const expectedResult: number = 5;

    expect(state.cartItems[0].orderRequest.mealsAmountChoice).toEqual(expectedResult);
  });

  it('adds quantity to non existing item', () => {
    const action = CartApiActions.addItemQuantity({
      request: changeCartItemRequestNonExisting,
    });
    const state = cartReducer({ ...cartState }, action);
    const expectedResult: number = state.cartItems[0].orderRequest.mealsAmountChoice;

    expect(state.cartItems[0].orderRequest.mealsAmountChoice).toEqual(expectedResult);
  });
  
  it('reduces quantity of existing item', () => {
    const action = CartApiActions.reduceItemQuantity({
      request: changeCartItemRequestExisting,
    });
    const state = cartReducer({ ...cartState }, action);
    const expectedResult: number = 4;

    expect(state.cartItems[0].orderRequest.mealsAmountChoice).toEqual(expectedResult);
  });

  it('reduces quantity of non existing item', () => {
    const action = CartApiActions.reduceItemQuantity({
      request: changeCartItemRequestNonExisting,
    });
    const state = cartReducer({ ...cartState }, action);
    const expectedResult: number = state.cartItems[0].orderRequest.mealsAmountChoice;

    expect(state.cartItems[0].orderRequest.mealsAmountChoice).toEqual(expectedResult);
  });

});


// add item

const addCartItemRequestNew = {
  productId: '1',
  orderRequest: {
    kcalChoice: '2000',
    mealsAmountChoice: 2,
  },
};

const addCartItemRequestExisting = {
  productId: '0',
  orderRequest: {
    kcalChoice: '3000',
    mealsAmountChoice: 2,
  },
};

const expectedCartItemsExisting = [
  {
    productId: '0',
    orderRequest: {
      kcalChoice: '3000',
      mealsAmountChoice: 6,
    },
  },
];

// remove
const removeCartItemRequestNotExisting = {
  productId: '0',
  orderRequest: {
    kcalChoice: '1000',
    mealsAmountChoice: 2,
  },
};

const removeCartItemRequestExisting = {
  productId: '0',
  orderRequest: {
    kcalChoice: '3000',
    mealsAmountChoice: 2,
  },
};

// change (add, reduce)
const changeCartItemRequestExisting = {
  productId: '0',
  orderRequest: {
    kcalChoice: '3000',
    mealsAmountChoice: 4,
  },
};

const changeCartItemRequestNonExisting = {
  productId: '1',
  orderRequest: {
    kcalChoice: '2500',
    mealsAmountChoice: 4,
  },
};
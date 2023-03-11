import { OrderRequest } from "./Order";

export interface Cart {
    cartItems: Array<CartItem> | [];
    cartSummary : CartSummary;
}

export interface CartItem {
    productId: string;
    orderRequest : OrderRequest;
    productPrice: number;
}

export interface CartSummary {
    totalPrice : number;
    subTotal : number;
    shipping: number;
    tax: number;
}

export interface CartItemAddRequest {
    productId : string;
    orderRequest : OrderRequest;
}
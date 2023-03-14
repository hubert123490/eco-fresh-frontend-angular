import { OrderRequest } from "./Order";
import { ProductImage } from "./Product";

export interface Cart {
    cartItems: Array<CartItem> | [];
    cartSummary : CartSummary;
}

export interface CartItem {
    productId: string;
    orderRequest : OrderRequest;
    productPrice?: number;
    productImage? : ProductImage
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


export interface CartItemRemoveRequest {
    productId : string;
    orderRequest : OrderRequest;
}

export interface CartItemQuantityChangeRequest {
    productId: string;
    orderRequest : OrderRequest;
}
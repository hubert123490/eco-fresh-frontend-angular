export interface Cart {
    cartItems: CartItem[];
}

export interface CartItem {
    id: string;
    quantity: number
}

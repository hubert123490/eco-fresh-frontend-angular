export interface Cart {
    cartItems: CartItem[];
}

export interface CartItem {
    id: string;
    quantity: number,
    name: string,
    imageUrl: string
}

import { SlideInterface } from "src/app/components/shared/carousel/carousel.component";

export interface ProductDetails {
    productId: string;
    productName: string;
    productDescription: string;
    productPrice: number;
    productCategory: string;
    productCertificate: string;
    productProducer: string;
    productKcal: string;
    productImages: Array<SlideInterface>;
    orderInput : OrderInput;
    orderSummary : OrderSummary;
}

export interface OrderInput {
    kcalChoices : Array<string>;
    mealsAmount : Array<number>
}

export interface OrderSummary {
    totalPrice : number;
    mealAmount : number;
    mealKcal : number;
    ingredientsDetails : Array<IngredientDetails>;
}

export interface IngredientDetails {
    ingredientName : string;
    ingredientAmount : string;
}
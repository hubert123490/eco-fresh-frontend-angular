export interface ProductDetails {
  productId: string;
  productName: string;
  productDetailedDescription: string;
  productPrice: string;
  productCategory: string;
  productCertificate: string;
  productKcal: string;
  productImage: string;
  ingredients: { [key: string]: IngredientType };
}

export type IngredientType = {
  name: string;
  value: string;
};

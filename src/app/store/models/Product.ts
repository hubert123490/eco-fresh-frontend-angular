export interface Product {
  productId: string;
  productName: string;
  productDescription: string;
  productPrice: number;
  productCategory: string;
  productCertificate: string;
  productProducer: string;
  productKcal: KcalRange;
  productImage: ProductImage;
}

export interface ProductImage {
  src: string;
  alt: string;
}

export interface KcalRange {
  minKcal: number;
  maxKcal: number;
}

export interface ProductsSize {
  productsSize : number;
}
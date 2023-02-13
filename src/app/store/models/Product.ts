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

interface ProductImage {
  src: string;
  alt: string;
}

interface KcalRange {
  minKcal: number;
  maxKcal: number;
}

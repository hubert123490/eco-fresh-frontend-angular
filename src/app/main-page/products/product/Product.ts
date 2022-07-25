class Product {
  productId: number | undefined;
  productName: string = '';
  productDescription: string = '';
  productPrice: number = 0;
  productCategory: string = '';
  productCertificate: string = '';
  productProducer: string = '';
  productKcal: number[] = [0, 0];
  productImages: string = '';

  constructor(product?: Product) {
    if (product) {
      this.productId = product.productId;
      this.productName = product.productName;
      this.productDescription = product.productDescription;
      this.productPrice = product.productPrice;
      this.productCategory = product.productCategory;
      this.productCertificate = product.productCertificate;
      this.productProducer = product.productProducer;
      this.productKcal = product.productKcal;
      this.productImages = product.productImages;
    }
  }
}

export default Product;

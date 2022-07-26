class ProductDetails {
    productId: number | undefined;
  
    constructor(product?: ProductDetails) {
      if (product) {
        this.productId = product.productId;
      }
    }
  }
  
  export default ProductDetails;
  
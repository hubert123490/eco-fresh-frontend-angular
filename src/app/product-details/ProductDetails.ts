import Product from "../main-page/products/product/Product";

class ProductDetails {
    productId : number | undefined = undefined;
    product : Product = new Product();
  
    constructor(product?: ProductDetails) {
      if (product) {
        this.productId = product.productId;
        this.product = product.product;
      }
    }
  }
  
  export default ProductDetails;
  
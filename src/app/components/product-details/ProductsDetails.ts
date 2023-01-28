import ProductDetails from './ProductDetails';

export const productsDetails = [
  new ProductDetails({
    productId: 0,
    product: {
      productId: 0,
      productName: 'Chicken Soup',
      productDescription: `
              Everyone has their own favorite chicken soup recipe, but rarely have so few ingredients added up to so much comfort. This version has classic flavors and, thanks to a simplified method, cooks more quickly than traditional chicken soups (the dish is ready in a little over an hour). There's no need to make a separate stock; the vegetables and meat form their own satisfying broth.`,
      productPrice: 50.0,
      productCategory: 'Soups',
      productCertificate: 'ECO',
      productProducer: 'Blods',
      productKcal: [2000, 3000],
      productImages: '',
    },
  }),
];

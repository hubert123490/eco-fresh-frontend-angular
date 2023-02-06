import { NavigationData } from '../components/layout/data-types.interface';

export const navData: NavigationData = {
  headerData: {
    logo: {
      content: 'Eco Fresh',
      routerLink: '/landing-page',
    },
    links: [
      {
        content: 'order',
        routerLink: '/products',
      },
      {
        content: 'shopping_cart',
        routerLink: '/shopping-cart',
        isIcon: true,
      },
    ],
    buttonLink: {
      content: 'Sign in',
      routerLink: '/login-page',
    },
  },
  footerData: {
    rows: [
      [
        {
          textContent: "Company's data",
          href: '#',
        },
      ],
      [
        {
          textContent: 'Regulations',
          href: '#',
        },
      ],
      [
        {
          textContent: 'Privacy policy',
          href: '#',
        },
      ],
    ],
  },
};

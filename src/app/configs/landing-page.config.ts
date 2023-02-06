import { LandingPageData } from '../components/landing-page/data-types.interface';

export const landingPageData: LandingPageData = {
  welcome: {
    header: 'Eco Fresh provides fresh ingredients delivery.',
    description:
      'Get top notch ingredients at any time. You choose how much and what you order.',
    buttonText: 'Order a delivery!',
    buttonRouterLink: '/products',
    imageUrl: 'assets/landing-page/welcome.jpg',
  },
  companyValues: {
    header: 'Our company goals',
    companyValues: [
      {
        header: 'Food waste reduction',
        textContent:
          "We want to prevent food wasting, that's why you can order exactly how much you need.",
      },
      {
        header: 'Highest quality',
        textContent:
          ' Our providers are passionate farmers, food manufacturers and gardeners. They have been selling top quality ingredients for ages.',
      },
      {
        header: 'Eco-friendly',
        textContent:
          "We care for environment. That's why we provide eco-friendly packaging!",
      },
    ],
  },
  customersStories: {
    header: 'Opinions from our customers!',
    customersStories: [
      {
        customerName: 'Gregor Notwell',
        customerBio: 'Father of none',
        description:
          "Thanks to eco-fresh fresh ingredients delivery I don't have to move my lazyass. It saved my life, my introvert nature doesn't allow me to go outside. I don't know how long will I make it with only pizza and kebabs.",
        imageData: {
          src: 'assets/landing-page/customers-stories/Gregor.jpg',
          alt: 'Gregor Notwell',
        },
      },
      {
        customerName: 'Jan Kowalski',
        customerBio: 'Father of 5 children',
        description:
          "Thanks to eco-fresh I don't have to make shopping for like 3 hours in order to get top quality ingredients for my family.",
        imageData: {
          src: 'assets/landing-page/customers-stories/Jan.jpg',
          alt: 'Jan Kowalski',
        },
      },
      {
        customerName: 'Dorota Majowska',
        customerBio: 'Random wife',
        description:
          " My husband loves me more than ever. I used to make food from not fresh ingredients, because I didn't want to throw away food. Now I am free from my burden.",
        imageData: {
          src: 'assets/landing-page/customers-stories/Dorota.jpg',
          alt: 'Dorota Majowska',
        },
      },
    ],
  },
  queries : {
    header: "So what do you think?",
    queryHeader: "Sounds good?",
    queryButton: {
      textContent: "Order a delivery!",
      routerLink: ""
    },
    socialMediaHeader: "Need more info?",
    facebookButton: {
      href: "#"
    }
  }
};

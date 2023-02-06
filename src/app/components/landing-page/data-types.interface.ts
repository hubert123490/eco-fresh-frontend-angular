export interface LandingPageData {
  welcome: WelcomeData;
  companyValues: CompanyValuesData;
  customersStories: CustomersStoriesData;
  queries: QueriesData
}

export interface WelcomeData {
  header: string;
  description: string;
  buttonText: string;
  buttonRouterLink: string;
  imageUrl: string;
}

export interface CompanyValuesData {
  header: string;
  companyValues: Array<CompanyValue>;
}

export interface CustomersStoriesData {
  header: string;
  customersStories: Array<CustomerStory>;
}

export interface CustomerStory {
  customerName: string;
  customerBio: string;
  description: string;
  imageData: ImageData;
}

export interface ImageData {
  src: string;
  alt: string;
}

interface CompanyValue {
  header: string;
  textContent: string;
}

export interface QueriesData {
  header: string;
  queryHeader: string;
  queryButton: {
    textContent: string,
    routerLink: string
  },
  socialMediaHeader: string;
  facebookButton: {
    href: string;
  }
}


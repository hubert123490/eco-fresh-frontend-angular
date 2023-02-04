export interface NavigationData {
  headerData: HeaderData;
  footerData: FooterData;
}

export interface HeaderData {
  logo: LinkData
  links : Array<LinkData>,
  buttonLink : LinkData
}

export interface FooterData {
  rows: Array<Array<FooterLink>>
}

interface LinkData {
    content: string;
    routerLink: string;
    isIcon?: boolean;
}

interface FooterLink {
  textContent: string,
  href: string
}

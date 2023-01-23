import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { WelcomeComponent } from './landing-page/welcome/welcome.component';
import { CompanyValuesComponent } from './landing-page/company-values/company-values.component';
import { QueriesComponent } from './landing-page/queries/queries.component';
import { QueryButtonComponent } from './landing-page/queries/query-button/query-button.component';
import { CustomersStoriesComponent } from './landing-page/customers-stories/customers-stories.component';
import { CustomerStoryComponent } from './landing-page/customers-stories/customer-story/customer-story.component';
import { CustomerImageComponent } from './landing-page/customers-stories/customer-story/customer-image/customer-image.component';
import { FacebookSvgComponent } from './landing-page/queries/facebook-svg/facebook-svg.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TopSearchNavComponent } from './main-page/top-search-nav/top-search-nav.component';
import { LeftSearchNavComponent } from './main-page/left-search-nav/left-search-nav.component';
import { PriceRangeComponent } from './main-page/left-search-nav/price-range/price-range.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './main-page/products/products.component';
import { ProductComponent } from './main-page/products/product/product.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductDetailsImageComponent } from './product-details/product-details-image/product-details-image.component';
import { ProductDetailsInfoComponent } from './product-details/product-details-info/product-details-info.component';
import { ProductDetailsOrderComponent } from './product-details/product-details-order/product-details-order.component';
import { ProductDetailsSummaryComponent } from './product-details/product-details-summary/product-details-summary.component';
import { CartComponent } from './cart/cart.component';
import { CartProductsComponent } from './cart/cart-products/cart-products.component';
import { CartProductComponent } from './cart/cart-products/cart-product/cart-product.component';
import { CartOrderComponent } from './cart/cart-order/cart-order.component';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { SignInComponent } from './auth/login-page/sign-in/sign-in.component';
import { OAuthComponent } from './auth/o-auth/o-auth.component';
// import { RegistrationPageComponent } from './auth/registration-page/registration-page.component';
// import { RegistrationFormComponent } from './auth/registration-page/registration-form/registration-form.component';

const routes: Routes = [
  {
    path: 'landing-page',
    component: LandingPageComponent,
  },
  {
    path: 'products',
    component: MainPageComponent,
  },
  {
    path: 'products/:productId',
    component: ProductDetailsComponent,
  },
  {
    path: 'shopping-cart',
    component: CartComponent,
  },
  {
    path: 'login-page',
    component: LoginPageComponent,
  },
  // {
  //   path: 'registration-page',
  //   component: RegistrationPageComponent,
  // },
  {
    path: '**',
    component: MainPageComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    FooterComponent,
    HeaderComponent,
    LandingPageComponent,
    WelcomeComponent,
    CompanyValuesComponent,
    QueriesComponent,
    QueryButtonComponent,
    CustomersStoriesComponent,
    CustomerStoryComponent,
    CustomerImageComponent,
    FacebookSvgComponent,
    MainPageComponent,
    TopSearchNavComponent,
    LeftSearchNavComponent,
    PriceRangeComponent,
    ProductsComponent,
    ProductComponent,
    ProductDetailsComponent,
    ProductDetailsImageComponent,
    ProductDetailsInfoComponent,
    ProductDetailsOrderComponent,
    ProductDetailsSummaryComponent,
    CartComponent,
    CartProductsComponent,
    CartProductComponent,
    CartOrderComponent,
    CarouselComponent,
    LoginPageComponent,
    SignInComponent,
    OAuthComponent,
    // RegistrationPageComponent,
    // RegistrationFormComponent,
  ],
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

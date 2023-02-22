import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { LayoutComponent } from './components/layout/layout.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { WelcomeComponent } from './components/landing-page/welcome/welcome.component';
import { CompanyValuesComponent } from './components/landing-page/company-values/company-values.component';
import { QueriesComponent } from './components/landing-page/queries/queries.component';
import { QueryButtonComponent } from './components/landing-page/queries/query-button/query-button.component';
import { CustomersStoriesComponent } from './components/landing-page/customers-stories/customers-stories.component';
import { CustomerStoryComponent } from './components/landing-page/customers-stories/customer-story/customer-story.component';
import { CustomerImageComponent } from './components/landing-page/customers-stories/customer-story/customer-image/customer-image.component';
import { FacebookSvgComponent } from './components/landing-page/queries/facebook-svg/facebook-svg.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { TopSearchNavComponent } from './components/main-page/top-search-nav/top-search-nav.component';
import { LeftSearchNavComponent } from './components/main-page/left-search-nav/left-search-nav.component';
import { PriceRangeComponent } from './components/main-page/left-search-nav/price-range/price-range.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './components/main-page/products/products.component';
import { ProductComponent } from './components/main-page/products/product/product.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductDetailsImageComponent } from './components/product-details/product-details-image/product-details-image.component';
import { ProductDetailsInfoComponent } from './components/product-details/product-details-info/product-details-info.component';
import { ProductDetailsOrderComponent } from './components/product-details/product-details-order/product-details-order.component';
import { ProductDetailsSummaryComponent } from './components/product-details/product-details-summary/product-details-summary.component';
import { CartComponent } from './components/cart/cart.component';
import { CartProductsComponent } from './components/cart/cart-products/cart-products.component';
import { CartProductComponent } from './components/cart/cart-products/cart-product/cart-product.component';
import { CartOrderComponent } from './components/cart/cart-order/cart-order.component';
import { CarouselComponent } from './components/shared/carousel/carousel.component';
import { LoginPageComponent } from './components/auth/login-page/login-page.component';
import { SignInComponent } from './components/auth/login-page/sign-in/sign-in.component';
import { OAuthComponent } from './components/auth/o-auth/o-auth.component';
import { RegistrationPageComponent } from './components/auth/registration-page/registration-page.component';
import { RegistrationFormComponent } from './components/auth/registration-page/registration-form/registration-form.component';
import { StoreModule } from '@ngrx/store';
import { productsReducer } from './store/reducers/products.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './store/effects/products.effects';
import { productDetailsReducer } from './store/reducers/product-details.reducer';
import { ProductDetailsEffects } from './store/effects/product-details.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PaginationComponent } from './components/shared/pagination/pagination.component';
import { paginationReducer } from './store/reducers/pagination.reducer';


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
  {
    path: 'registration-page',
    component: RegistrationPageComponent,
  },
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
    RegistrationPageComponent,
    RegistrationFormComponent,
    PaginationComponent,
  ],
  imports: [
    HttpClientModule,
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    FormsModule,
    StoreModule.forRoot({products : productsReducer, productDetails : productDetailsReducer, productsSize : paginationReducer}),
    EffectsModule.forRoot([ProductsEffects, ProductDetailsEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

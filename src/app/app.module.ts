import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { SidebarComponentComponent } from './components/sidebar-component/sidebar-component.component';
import { NavbarComponentComponent } from './components/navbar-component/navbar-component.component';
import { HeroComponentComponent } from './components/hero-component/hero-component.component';
import { FeaturesComponentComponent } from './components/features-component/features-component.component';
import { FeaturedProductsComponentComponent } from './components/featured-products-component/featured-products-component.component';
import { FeatureComponentComponent } from './feature-component/feature-component.component';
import {ProductModule} from "./product/product.module";
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductComponent } from './pages/product/product.component';
import { PromotionsComponent } from './pages/promotions/promotions.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    SidebarComponentComponent,
    NavbarComponentComponent,
    HeroComponentComponent,
    FeaturesComponentComponent,
    FeaturedProductsComponentComponent,
    FeatureComponentComponent,
    // DashboardComponent,
    // ProductsComponent,
    PromotionsComponent,
    ProductDetailsComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule
  ],
  providers: [],
  exports: [
    HeroComponentComponent,
    FeaturesComponentComponent,
    FeaturedProductsComponentComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

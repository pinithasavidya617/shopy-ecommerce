import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductBComponent } from './product-b/product-b.component';
import { ProductPageComponent } from './product-page/product-page.component';
import {DashboardComponent} from "../pages/dashboard/dashboard.component";
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductBComponent,
    ProductPageComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule

  ],
  exports: [
    ProductBComponent,
    ProductsComponent
  ]
})
export class ProductModule { }

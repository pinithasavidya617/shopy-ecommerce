import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {PromotionsComponent} from "./pages/promotions/promotions.component";
import {
  FeaturedProductsComponentComponent
} from "./components/featured-products-component/featured-products-component.component";
import {ProductDetailsComponent} from "./pages/product-details/product-details.component";
import {ProductComponent} from "./pages/product/product.component";

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'products', component: ProductComponent, children: [
    {path: 'featured', component: FeaturedProductsComponentComponent},
      {path: 'details', component: ProductDetailsComponent},
    ]},
  {path: 'promotions', component: PromotionsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


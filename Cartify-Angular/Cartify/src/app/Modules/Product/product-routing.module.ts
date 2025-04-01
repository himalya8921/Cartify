import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminProductsComponent } from './Components/admin-products/admin-products.component';
import { CustomerProductsComponent } from './Components/customer-products/customer-products.component';


const routes: Routes = [
  {path:'adminProducts',component: AdminProductsComponent},
    {path:'customerProducts',component: CustomerProductsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }

import { ProductDeleteComponent } from './features/products/components/product-delete/product-delete.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './features/home/home.component';
import { ProductsComponent } from './features/products/products.component';
import { ProductCreateComponent } from './features/products/components/product-create/product-create.component';
import { ProductUpdateComponent } from './features/products/components/product-update/product-update.component';

const routes: Routes = [

  {path: '', component: HomeComponent},

  {path: 'products', component: ProductsComponent},

  {path: 'products/create', component: ProductCreateComponent},

  {path: 'products/update/:id', component: ProductUpdateComponent},

  {path: 'products/delete/:id', component: ProductDeleteComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

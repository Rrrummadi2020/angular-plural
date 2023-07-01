import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsEditComponent } from './products-edit/products-edit.component';

const routes: Routes = [{ path: 'products', component: ProductsEditComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }

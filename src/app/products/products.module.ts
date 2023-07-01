import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsEditComponent } from './products-edit/products-edit.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ProductsEditComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }

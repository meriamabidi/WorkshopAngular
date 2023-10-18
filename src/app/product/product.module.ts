import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import {MainProductComponentComponent} from "../main/main-product-component/main-product-component.component";


@NgModule({
  declarations: [
    MainProductComponentComponent

  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainProductComponentComponent} from "../main-product-component/main-product-component.component";

const routes: Routes = [
  {path:"", component:MainProductComponentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }

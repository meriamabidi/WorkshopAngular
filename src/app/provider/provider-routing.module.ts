import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainProviderComponentComponent} from "../main/main-provider-component/main-provider-component.component";

const routes: Routes = [
  {path:"", component:MainProviderComponentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderRoutingModule { }

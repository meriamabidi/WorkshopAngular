import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderRoutingModule } from './provider-routing.module';
import {MainProviderComponentComponent} from "../main-provider-component/main-provider-component.component";


@NgModule({
  declarations: [
    MainProviderComponentComponent
  ],
  imports: [
    CommonModule,
    ProviderRoutingModule
  ]
})
export class ProviderModule { }

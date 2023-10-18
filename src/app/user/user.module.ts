import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {MainUserComponentComponent} from "../main-user-component/main-user-component.component";
import {ListUserComponentComponent} from "../list-user-component/list-user-component.component";


@NgModule({
  declarations: [
    MainUserComponentComponent,
    ListUserComponentComponent

  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }

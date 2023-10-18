import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainUserComponentComponent} from "../main-user-component/main-user-component.component";
import {ListUserComponentComponent} from "../list-user-component/list-user-component.component";

const routes: Routes = [
  {path:"",component:MainUserComponentComponent, children:[
      {path:':Category/Customer',component:ListUserComponentComponent},
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

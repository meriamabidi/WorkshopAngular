import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainUserComponentComponent} from "../../main/main-user-component/main-user-component.component";
import {ListUserComponentComponent} from "../../list-user-component/list-user-component.component";
import {ShowUserComponent} from "../../manageUser/show-user/show-user.component";

const routes: Routes = [
  {
    path: "", component: ShowUserComponent, children: [

      {path: ':Category/Customer', component: ListUserComponentComponent},
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}

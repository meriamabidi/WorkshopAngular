import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {NotFoundPageComponentComponent} from "./not-found-page-component/not-found-page-component.component";
import {HomeComponentComponent} from "./home-component/home-component.component";
import {MainProductComponentComponent} from "./main-product-component/main-product-component.component";
import {MainUserComponentComponent} from "./main-user-component/main-user-component.component";
import {MainProviderComponentComponent} from "./main-provider-component/main-provider-component.component";
import {ListUserComponentComponent} from "./list-user-component/list-user-component.component";

const routes: Routes = [

  {path:'',component:HomeComponentComponent},
  {path:'mainProduct',component:MainProductComponentComponent},
  {path:'mainUser',component:MainUserComponentComponent, children:[
      {path:':Category/Customer',component:ListUserComponentComponent},
    ]

  },
  {path:'mainProvider',component:MainProviderComponentComponent},
  {path:'**',component:NotFoundPageComponentComponent},

  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

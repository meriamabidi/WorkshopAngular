import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {NotFoundPageComponentComponent} from "./shared/not-found-page-component/not-found-page-component.component";
import {HomeComponentComponent} from "./main/home-component/home-component.component";
import {MainProductComponentComponent} from "./main/main-product-component/main-product-component.component";
import {MainUserComponentComponent} from "./main/main-user-component/main-user-component.component";
import {MainProviderComponentComponent} from "./main/main-provider-component/main-provider-component.component";
import {ListUserComponentComponent} from "./list-user-component/list-user-component.component";

const routes: Routes = [

  //apres l'ajout des modules + changement fel headercomponents.html

  {path: 'home', component: HomeComponentComponent},
  {
    path: 'users', loadChildren: () =>
      import('./manageUser/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'products', loadChildren: () =>
      import('./product/product.module').then(m => m.ProductModule)
  },
  {
    path: 'providers', loadChildren: () =>
      import('./provider/provider.module').then(m => m.ProviderModule)
  },
  {path: '**', component: NotFoundPageComponentComponent},


  //Les routes avant lajout des modules pour chaque component
  /*
    {path:'',component:HomeComponentComponent},
    {path:'mainProduct',component:MainProductComponentComponent},
    {path:'mainUser',component:MainUserComponentComponent, children:[
        {path:':Category/Customer',component:ListUserComponentComponent},
      ]

    },
    {path:'mainProvider',component:MainProviderComponentComponent},
    {path:'**',component:NotFoundPageComponentComponent},
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

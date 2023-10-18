import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListUserComponentComponent } from './list-user-component/list-user-component.component';
import {FormsModule} from "@angular/forms";
import { HeaderComponentsComponent } from './shared/header-components/header-components.component';
import { HomeComponentComponent } from './main/home-component/home-component.component';
import { MainUserComponentComponent } from './main/main-user-component/main-user-component.component';
import { MainProductComponentComponent } from './main/main-product-component/main-product-component.component';
import { MainProviderComponentComponent } from './main/main-provider-component/main-provider-component.component';
import { NotFoundPageComponentComponent } from './shared/not-found-page-component/not-found-page-component.component';
import {AppRoutingModule} from "./app-routing.module";
import { UserModule } from './manageUser/user/user.module';
import { ProductModule } from './product/product.module';
import { ProviderModule } from './provider/provider.module';
import { AddUserComponent } from './manageUser/add-user/add-user.component';
import { DeleteUserComponent } from './manageUser/delete-user/delete-user.component';
import { DetailUserComponent } from './manageUser/detail-user/detail-user.component';
import { ShowUserComponent } from './manageUser/show-user/show-user.component';
import { UpdateUserComponent } from './manageUser/update-user/update-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentsComponent,
    HomeComponentComponent,
    NotFoundPageComponentComponent,
    AddUserComponent,
    DeleteUserComponent,
    DetailUserComponent,
    ShowUserComponent,
    UpdateUserComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        UserModule,
        ProductModule,
        ProviderModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

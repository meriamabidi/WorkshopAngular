import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListUserComponentComponent } from './list-user-component/list-user-component.component';
import {FormsModule} from "@angular/forms";
import { HeaderComponentsComponent } from './header-components/header-components.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { MainUserComponentComponent } from './main-user-component/main-user-component.component';
import { MainProductComponentComponent } from './main-product-component/main-product-component.component';
import { MainProviderComponentComponent } from './main-provider-component/main-provider-component.component';
import { NotFoundPageComponentComponent } from './not-found-page-component/not-found-page-component.component';
import {AppRoutingModule} from "./app-routing.module";
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { ProviderModule } from './provider/provider.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentsComponent,
    HomeComponentComponent,
    NotFoundPageComponentComponent
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

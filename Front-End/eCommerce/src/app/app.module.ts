import { EcommerceService } from './services/eCommerce/EcommerceService';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './ecommerce/products/products.component';
import { OrdersComponent } from './ecommerce/orders/orders.component';
import { ShoppingCartComponent } from './ecommerce/shopping-cart/shopping-cart.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { BoardAdminComponent } from './components/board/board-admin/board-admin.component';
import { BoardModeratorComponent } from './components/board/board-moderator/board-moderator.component';
import { BoardUserComponent } from './components/board/board-user/board-user.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { RegisterComponent } from './components/user/register/register.component';
import { EcommerceComponent } from './ecommerce/ecommerce/ecommerce.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListValidateOrderComponent } from './admin/list-validate-order/list-validate-order.component';
import { ListOrderByUserComponent } from './admin/list-order-by-user/list-order-by-user.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    OrdersComponent,
    ShoppingCartComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    EcommerceComponent,
    ListValidateOrderComponent,
    ListOrderByUserComponent
  ],
  imports: [     
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MDBBootstrapModule.forRoot(),
        BrowserAnimationsModule
    ],
  providers: [EcommerceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

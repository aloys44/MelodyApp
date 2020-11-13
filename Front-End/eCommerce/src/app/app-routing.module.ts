import { ListValidateOrderComponent } from './admin/list-validate-order/list-validate-order.component';
import { ListOrderByUserComponent } from './admin/list-order-by-user/list-order-by-user.component';
import { EcommerceComponent } from './ecommerce/ecommerce/ecommerce.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { RegisterComponent } from './components/user/register/register.component';
import { LoginComponent } from './components/user/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{ path: '', component: EcommerceComponent, pathMatch: 'full' },
{ path: 'home', component: EcommerceComponent },
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'profile', component: ProfileComponent },
{ path: 'listOrderByUser', component: ListOrderByUserComponent },
{ path: 'ListAllValidate', component: ListValidateOrderComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

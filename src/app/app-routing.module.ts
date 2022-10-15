import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LoginComponent } from './component/login/login.component';
import { OrderPlaceComponent } from './component/order-place/order-place.component';
import { PleaseLoginPageComponent } from './component/please-login-page/please-login-page.component';

const routes: Routes = [
  {path:'', redirectTo:'/dashboard', pathMatch:'full'},
  {path:'dashboard', component:DashboardComponent},
  {path:'cart', component:CartComponent},
  {path:'cart/:Id', component:CartComponent},
  {path:'place-order', component:OrderPlaceComponent},
  {path:'login', component:LoginComponent},
  {path:'pleaseLogin', component:PleaseLoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

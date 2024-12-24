import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { RetailComponent } from './retail/retail.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';
import { WishlistComponent } from './wishlist/wishlist.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component:HomeComponent },
  { path: 'index', component:IndexComponent },
  { path: 'retail', component:RetailComponent },
  {path:'about',component:AboutComponent},
  {path:'feedback',component:FeedbackComponent},
  {path:'payment',component:PaymentComponent},
  {path:'payment-success',component:PaymentSuccessComponent},
  {path:'wishlist',component:WishlistComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

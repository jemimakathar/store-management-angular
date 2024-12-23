import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.css']
})
export class PaymentSuccessComponent {
  orderId: string | null = null;

  constructor(private router: Router) {
    
  }
  navigateToHome()
  {
    this.router.navigate(['home']);
    
  }
}

import { Component,OnInit } from '@angular/core';
import { DatashareService } from '../datashare.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
  export class PaymentComponent implements OnInit {
    totalBill: number = 0; // Property to hold the total bill
  
    constructor(private sharedDataService: DatashareService,private router:Router) {}
  
    ngOnInit(): void {
      // Subscribe to totalBill$ to get the latest value of the total bill
      this.sharedDataService.totalBill$.subscribe((bill) => {
        this.totalBill = bill;
      });
    }
    navigateTopaymentsuccess()
    {
      
      this.router.navigate(['payment-success']);
    }
}

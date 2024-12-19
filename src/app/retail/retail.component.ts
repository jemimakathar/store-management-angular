import { Component } from '@angular/core';
@Component({
  selector: 'app-retail',
  templateUrl: './retail.component.html',
  styleUrls: ['./retail.component.css']
})
export class RetailComponent {
  items:{[key:number]:number}={
    5001: 20,
    5002: 25,
    5003: 30,
    5004: 40,
    5005: 50
  };
  totalBill:number= 0;
  cart:{itemId: number; quantity: number}[] = [];
  isAdd:boolean = true;
  itemId:number|null=null;
  quantity:number|null=null;
  addItem() 
  {
    if (this.itemId && this.quantity && this.items[this.itemId]) 
      {
      const price = this.items[this.itemId];
      const discount = (this.itemId===5004 || this.itemId===5005) ? 0.2 : 0;
      const finalPrice = price - (price * discount);
      this.totalBill += finalPrice *this.quantity;
      if((this.itemId>=5000 && this.itemId<5006) &&(this.quantity>0))
      {
      this.cart.push({ itemId: this.itemId, quantity: this.quantity });
      this.itemId = null;
      this.quantity = null;
      }
      else{
        alert("Invalid")
      }
     } 
     else 
     {
      alert('Invalid Item ID ');
     }
  }
  finishBilling() 
  {
    this.isAdd = false;
  }
  resetBilling() 
  {
    this.totalBill = 0;
    this.cart = [];
    this.isAdd = true;
  }
}




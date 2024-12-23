import { Component } from '@angular/core';
import { myitems,item} from '../interface.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-retail',
  templateUrl: './retail.component.html',
  styleUrls: ['./retail.component.css']
})
export class RetailComponent {
  items:myitems=item;
  totalBill:number= 0;
  cart:{itemId: string; quantity: number}[] = [];
  isAdd:boolean = true;
  itemId:string|null=null;
  quantity:number|null=null;
  searchItem:string='';
  filterItems:{id:string;price:number}[]=[]
  

  constructor(private router:Router)
  {
    this.items=item;
  }


  
  addItem() 
  {
    if (this.itemId && this.quantity && this.items[this.itemId]) 
      {
      const price = this.items[this.itemId];
      const discount = this.itemId==='Laptop' || this.itemId=== 'Iphone' ? 0.2 : 0;
      const finalPrice = price - (price * discount);
      this.totalBill += finalPrice *this.quantity;
      if(this.quantity>0)
      {
      this.cart.push({ itemId: this.itemId, quantity: this.quantity });
      this.itemId = null;
      this.quantity = null;
      }
      else
      {
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
  delete(itemId: string): void {
    const itemIndex = this.cart.findIndex((it) => it.itemId === itemId);
    if (itemIndex > -1) {
      this.totalBill -= this.cart[itemIndex].quantity * this.items[itemId];
      this.cart.splice(itemIndex, 1);
    }
  }
  
  onSearch(): void {
    const term = this.searchItem.toLowerCase().trim();
    this.filterItems = Object.keys(this.items)
      .filter((key) => key.toLowerCase().includes(term))
      .map((key) => ({
        id: key,
        price: this.items[key],
      }));
}



}



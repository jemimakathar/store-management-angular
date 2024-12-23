import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';//to track component 
@Injectable({
  providedIn: 'root'
})
export class DatashareService {
  private totalBillSubject = new BehaviorSubject<number>(0);
  totalBill$ = this.totalBillSubject.asObservable();//A Subject can emit values (it acts like an Observer) and can also be subscribed to (it acts like an Observable).


  constructor() {}
    setTotalBill(total: number): void {
      this.totalBillSubject.next(total);// This method allows us to update the totalBill value. When you call this method from another component, it updates the BehaviorSubject,
    }  
}

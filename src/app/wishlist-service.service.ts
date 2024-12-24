import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WishlistServiceService {
  private wishlistSubject = new BehaviorSubject<any[]>([]);
  wishlist$ = this.wishlistSubject//.asObservable()  -- To ensure immutability and encapsulation of data.

  constructor() {}

  addToWishlist(product: any): void {
    const currentWishlist = this.wishlistSubject.value;
    const isAlreadyInWishlist = currentWishlist.some((item) => item.name === product.name);// The some() method in JavaScript is an array method that checks if at least one element in an array satisfies a given condition. It returns a boolean value:
    if (!isAlreadyInWishlist) {
      this.wishlistSubject.next([...currentWishlist, product]);
    } 
    else 
    {
      alert(`${product.name} is already in the wishlist!`);
    }
  }

  removeFromWishlist(product: any): void {
    const currentWishlist = this.wishlistSubject.value.filter(
      (item) => item.name !== product.name
    );
    this.wishlistSubject.next(currentWishlist);
  }
}



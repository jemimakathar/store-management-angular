import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WishlistServiceService {
  private wishlistSubject = new BehaviorSubject<any[]>([]);
  wishlist$ = this.wishlistSubject.asObservable();

  constructor() {}

  addToWishlist(product: any): void {
    const currentWishlist = this.wishlistSubject.value;
    const isAlreadyInWishlist = currentWishlist.some((item) => item.name === product.name);
    if (!isAlreadyInWishlist) {
      this.wishlistSubject.next([...currentWishlist, product]);
    } else {
      alert(`${product.name} is already in the wishlist!`);
    }
  }

  getWishlist(): any[] {
    return this.wishlistSubject.value;
  }

  removeFromWishlist(product: any): void {
    const currentWishlist = this.wishlistSubject.value.filter(
      (item) => item.name !== product.name
    );
    this.wishlistSubject.next(currentWishlist);
  }
}



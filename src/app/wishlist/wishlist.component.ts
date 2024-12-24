import { Component } from '@angular/core';
import { WishlistServiceService } from '../wishlist-service.service';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {
  wishlist: any[] = [];

  constructor(private wishlistService:WishlistServiceService) {}

  ngOnInit(): void {
    // The subscribe() method is used to start the execution of an Observable.
    this.wishlistService.wishlist$.subscribe((items) => {
      this.wishlist = items;
    });
  }

  removeFromWishlist(product: any): void {
    this.wishlistService.removeFromWishlist(product);
  }

}

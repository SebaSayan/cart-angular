import { Injectable } from '@angular/core';
import { Product } from './product/product.model';
import { CartItem } from './cart/cart.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: CartItem[] = [];

  constructor() {
    this.loadCartFromLocalStorage();
  }

  addToCart(product: Product): void {
    const existingItem = this.cartItems.find(
      (item) => item.product.id === product.id
    );

    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItems.push({ product, quantity: 1 });
    }

    this.updateLocalStorage();
  }

  getCartItems(): CartItem[] {
    this.updateLocalStorage();
    return this.cartItems;
  }

  private updateLocalStorage(): void {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  private loadCartFromLocalStorage(): void {
    const cartItemsStr = localStorage.getItem('cartItems');
    if (cartItemsStr) {
      this.cartItems = JSON.parse(cartItemsStr);
    }
  }
}

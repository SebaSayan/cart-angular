import { Injectable } from '@angular/core';
import { Product } from './product/product.model';
import { CartItem } from './cart/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: CartItem[] = [];

  constructor() {}

  addToCart(product: Product): void {
    const existingItem = this.cartItems.find(item => item.product.id === product.id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItems.push({ product, quantity: 1 });
    }
  }

  getCartItems(): CartItem[] {
    return this.cartItems;
  }
}
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';
import { CartItem } from './cart.model';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})

export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  totalItems: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.getCartItemsAndUpdateTotal();
  }

  getCartItemsAndUpdateTotal(): void {
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotalItems();
  }

  calculateTotalItems(): void {
    this.totalItems = this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  }

  incrementQuantity(item: CartItem): void {
    item.quantity++;
    this.getCartItemsAndUpdateTotal();
  }

  decrementQuantity(item: CartItem): void {
    if (item.quantity > 1) {
      item.quantity--;
      this.getCartItemsAndUpdateTotal();
    }
  }

  removeItem(item: CartItem): void {
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      this.getCartItemsAndUpdateTotal();
    }
  }

  getTotalQuantity(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

}
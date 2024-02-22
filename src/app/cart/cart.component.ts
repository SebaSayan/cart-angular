import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';
import { CartItem } from './cart.model';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Panier</h2>
    <div class="container-cart">
      <div class='item-container'>
      <div class="item" *ngFor="let item of cartItems">

        <div class="img-cart-container">
          <img class='cart-img' [src]="item.product.img" [alt]="item.product.description">
        </div>

  <div class="item-description">
    <h4>{{ item.product.description }}</h4>
    <p>{{ item.product.price * item.quantity}}€</p>
    <h6>Quantité : {{ item.quantity }}</h6>
  </div>
  
  <div class="cart-icons">
    <button class='add-item' (click)="incrementQuantity(item)">+</button>
    <button class='sub-item' (click)="decrementQuantity(item)">-</button>
    <button class='remove-item-cart' (click)="removeItem(item)">X</button>
  </div>
       </div>
      </div>
      <div class="total">
        <div>
          <h2>Total</h2>
          <h2>{{ getTotal() }}€</h2>
        </div>
        
      </div>
    </div>
  `
})

export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  }
  incrementQuantity(item: CartItem): void {
    item.quantity++;
  }

  decrementQuantity(item: CartItem): void {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  removeItem(item: CartItem): void {
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }
}
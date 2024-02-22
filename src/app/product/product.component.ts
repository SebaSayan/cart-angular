import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';
import { Product } from './product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div>
    <h1>Articles</h1>
      <div class="card-container">
        <div *ngFor="let product of products" class="card">
          <div class="img-container">
            <img [src]="product.img" [alt]="product.description">
          </div>
          <div class="card-text">
            <h3>{{ product.description }}</h3>
            <span>{{ product.price}}€</span>
          </div>
            <div class="add-to-cart">
              <button (click)="addToCart(product)">
                Ajouter au panier
              </button>
            </div>
        </div>
      </div>
  </div>
  `
})
export class ProductComponent implements OnInit {
  products: Product[] = [
    {
      id: 1,
      description: 'Clavier Asus',
      price: 290,
      img: '../../assets/pictures/asus.jpg',
    },
    {
      id: 2,
      description: 'Clavier Corsair',
      price: 69,
      img: '../../assets/pictures/corsair.jpg',
    },
    {
      id: 3,
      description: 'Clavier Empire Gaming',
      price: 20,
      img: '../../assets/pictures/empiregaming.jpg',
    },
    {
      id: 4,
      description: 'Clavier Glab',
      price: 25,
      img: '../../assets/pictures/glab.jpg',
    },
    {
      id: 5,
      description: 'Clavier KLIM',
      price: 35,
      img: '../../assets/pictures/klim.jpg',
    },
    {
      id: 6,
      description: 'Clavier Logitech',
      price: 64,
      img: '../../assets/pictures/logi.jpg',
    },
    {
      id: 7,
      description: 'Clavier Logitech ',
      price: 150,
      img: '../../assets/pictures/logi2.jpg',
    },
    {
      id: 8,
      description: 'Clavier Razer',
      price: 49,
      img: '../../assets/pictures/razer.jpg',
    },
    {
      id: 9,
      description: 'Clavier Rii',
      price: 30,
      img: '../../assets/pictures/rii.jpg',
    },
    {
        id: 10,
        description: 'Clavier Roccat',
        price: 29,
        img: '../../assets/pictures/roccat.jpg',
    },
    {
        id: 11,
        description: 'Clavier Thomson',
        price: 87,
        img: '../../assets/pictures/thomson.jpg',
    },
    {
        id: 12,
        description: 'Clavier Trust',
        price: 49,
        img: '../../assets/pictures/trust.jpg',
    }
]
constructor(private cartService: CartService) {}

ngOnInit(): void {}

addToCart(product: Product): void {
  this.cartService.addToCart(product);
}
}


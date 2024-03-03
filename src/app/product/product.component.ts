import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';
import { Product } from './product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  products: Product[] = [
    {
      id: 1,
      categorie: 'Clavier',
      description: 'Clavier Asus',
      price: 290,
      img: '../../assets/pictures/asus.jpg',
    },
    {
      id: 2,
      categorie: 'Clavier',
      description: 'Clavier Corsair',
      price: 69,
      img: '../../assets/pictures/corsair.jpg',
    },
    {
      id: 3,
      categorie: 'Clavier',
      description: 'Clavier Empire Gaming',
      price: 20,
      img: '../../assets/pictures/empiregaming.jpg',
    },
    {
      id: 4,
      categorie: 'Clavier',
      description: 'Clavier Glab',
      price: 25,
      img: '../../assets/pictures/glab.jpg',
    },
    {
      id: 5,
      categorie: 'Souris',
      description: 'Souris Logitech',
      price: 56,
      img: '../../assets/pictures/mouse-logitech-G502.jpg',
    },
    {
      id: 6,
      categorie: 'Souris',
      description: 'Souris Razer',
      price: 59,
      img: '../../assets/pictures/mouse-razer-basilisk.jpg',
    },
    {
      id: 7,
      categorie: 'Souris',
      description: 'Souris Steel Series',
      price: 30,
      img: '../../assets/pictures/mouse-steelseries-rival3.jpg',
    },
    {
      id: 8,
      categorie: 'Souris',
      description: 'Souris Asus',
      price: 149,
      img: '../../assets/pictures/mouse-asus-spatha.jpg',
    },
    {
      id: 9,
      categorie: 'Casque',
      description: 'Casque Hyper X',
      price: 99,
      img: '../../assets/pictures/casque-hyperX-cloud2.jpg',
    },
    {
      id: 10,
      categorie: 'Casque',
      description: 'Casque Logitech',
      price: 29,
      img: '../../assets/pictures/casque-logitech-gprox.jpg',
    },
    {
      id: 11,
      categorie: 'Casque',
      description: 'Casque JBL',
      price: 59,
      img: '../../assets/pictures/casque-jbl-quantum400.jpg',
    },
    {
      id: 12,
      categorie: 'Casque',
      description: 'Casque Razer',
      price: 116,
      img: '../../assets/pictures/casque-razer-kraken.jpg',
    },
  ];

  filteredProducts: Product[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.filteredProducts = [...this.products];
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }
  filterProducts(category: string): void {
    if (category === 'all') {
      this.filteredProducts = [...this.products]; 
    } else {
      this.filteredProducts = this.products.filter(product => product.categorie === category);
    }
  }
}

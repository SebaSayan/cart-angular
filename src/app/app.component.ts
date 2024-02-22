import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ProductComponent,
    CartComponent
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'AlloExpress';
  logoUrl = '../assets/pictures/alloexpress.png';
}

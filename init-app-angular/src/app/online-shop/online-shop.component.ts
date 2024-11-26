import { Component } from '@angular/core';
import { product } from './product';

@Component({
  selector: 'app-online-shop',
  standalone: true,
  imports: [],
  templateUrl: './online-shop.component.html',
  styleUrl: './online-shop.component.css'
})
export class OnlineShopComponent {
  products: product[] = [];

  constructor() {
    this.products.push(new product('iPhone 16 pro max', 1200));
    this.products.push(new product('iPhone 15 pro max', 1100));
 }

  addProduct(description: string, price: number): void {
    if( Number.isNaN(price) ||price <= 0 || description.trim() === '') {
      console.log('Invalid product');
      return;
    }
    let newProduct = new product(description, price);
    this.products.push(newProduct);
  }
}
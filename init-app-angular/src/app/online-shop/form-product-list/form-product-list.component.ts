import { Component, ElementRef, ViewChild } from '@angular/core';
import { product } from '../product';
import { FormProductAddComponent } from '../form-product-add/form-product-add.component';

@Component({
  selector: 'app-form-product-list',
  standalone: true,
  imports: [FormProductAddComponent],
  templateUrl: './form-product-list.component.html',
  styleUrl: './form-product-list.component.css'
})
export class FormProductListComponent {

  products: product[] = [];
//  @ViewChild('description') description!: ElementRef;
//  @ViewChild('price') price!: ElementRef;

  addProduct(newProduct: product): void {
  //addProduct(): void {
    console.log('add product ---- init form product add');
    console.log(newProduct.description);
    console.log(newProduct.price);
    console.log('add product ---- end form product add');

    let description =newProduct.description;
    let price = Number(newProduct.price);

    if( Number.isNaN(price) ||price <= 0 || description.trim() === '') {
      console.log('Invalid product');
      return;
    }
    this.products.push(new product (description, price));
  }

  constructor() {
    this.products.push(new product('iPhone 16 pro max', 1200));
    this.products.push(new product('iPhone 15 pro max', 1100));
 }
}


//aqui el esta esperando el description como input en el html
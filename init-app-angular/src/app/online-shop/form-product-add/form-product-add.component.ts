import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Product } from '../product/product';

@Component({
  selector: 'app-form-product-add',
  standalone: true,
  imports: [],
  templateUrl: './form-product-add.component.html',
  styleUrl: './form-product-add.component.css'
})
export class FormProductAddComponent{

  @ViewChild('descriptionInput') descriptionInput!: ElementRef;
  @ViewChild('priceInput') priceInput!: ElementRef;
  @Output() newProduct = new EventEmitter<Product>();

  /**ngAfterViewInit() {
    // Ensure the formProductListComponent is initialized
    if (this.formProductListComponent) {
      console.log('FormProductListComponent is initialized');
    } else {
      console.warn('FormProductListComponent is not initialized');
    }
  }**/

  addProduct(event: Event) {
    event.preventDefault();

    // values check
    if(this.descriptionInput.nativeElement.value.trim() === ''
       ||this.priceInput === null
       ||this.priceInput.nativeElement.valueAsNumber <= 0) {
        console.warn('Empty or invalid product');
        return;
    }
    const product = new Product(this.descriptionInput.nativeElement.value, this.priceInput.nativeElement.valueAsNumber);

    // add product to list and emit event
    this.newProduct.emit(product);

    //reset input values
    this.descriptionInput.nativeElement.value = '';
    this.priceInput.nativeElement.value = '';
  }
}

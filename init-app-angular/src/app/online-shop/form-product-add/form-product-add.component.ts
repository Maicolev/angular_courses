import { Component } from '@angular/core';
import { Product } from '../product/product';
import { FakeStoreService } from '../../fake-store.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-product-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-product-add.component.html',
  styleUrl: './form-product-add.component.css'
})
export class FormProductAddComponent{

  descriptionInput: string = '';
  priceInput: number | null = null;
  /**
  @ViewChild('descriptionInput') descriptionInput!: ElementRef;
  @ViewChild('priceInput') priceInput!: ElementRef;
  @Output() newProduct = new EventEmitter<Product>();
  **/

  /**ngAfterViewInit() {
    // Ensure the formProductListComponent is initialized
    if (this.formProductListComponent) {
      console.log('FormProductListComponent is initialized');
    } else {
      console.warn('FormProductListComponent is not initialized');
    }
  }**/

  constructor(private fakeStoreService: FakeStoreService) {}

  addProduct(event: Event) {
    //for not auto-refresh
    event.preventDefault();

    // values check
    if(this.descriptionInput.trim() === ''
       ||this.priceInput === null
       ||this.priceInput <= 0) {
        console.warn('Empty or invalid product');
        return;
    }
    const product = new Product(this.descriptionInput, this.priceInput);

    // add product to list and emit event
    this.fakeStoreService.addProduct(product);

    //reset input values
    this.descriptionInput = '';
    this.priceInput = 0;
  }
}

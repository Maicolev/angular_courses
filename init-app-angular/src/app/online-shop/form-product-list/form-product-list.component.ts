import { Component } from '@angular/core';
import { Product } from '../product/product';
import { FormProductAddComponent } from '../form-product-add/form-product-add.component';
import { ProductComponent } from '../product/product.component';
import { FakeStoreService } from '../../fake-store.service';

@Component({
  selector: 'app-form-product-list',
  standalone: true,
  imports: [FormProductAddComponent, ProductComponent],
  templateUrl: './form-product-list.component.html',
  styleUrl: './form-product-list.component.css'
})
export class FormProductListComponent {

  products: Product[] = [
    /**new Product('iPhone 16 pro max', 1200),
    new Product('iPhone 15 pro max', 1100)**/
  ];
  constructor(fakeStoreService: FakeStoreService) {
    fakeStoreService.getProducts().subscribe((data) => {
      this.products = data;
    });

}

addProduct(newProduct: Product): void {
  this.products.push(newProduct);
}
}

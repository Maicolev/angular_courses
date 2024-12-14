import { Component } from '@angular/core';
import { Product } from '../product/product';
import { FormProductAddComponent } from '../form-product-add/form-product-add.component';
import { ProductComponent } from '../product/product.component';
import { FakeStoreService } from '../../fake-store.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-product-list',
  standalone: true,
  imports: [FormProductAddComponent, ProductComponent, FormsModule],
  templateUrl: './form-product-list.component.html',
  styleUrl: './form-product-list.component.css'
})
export class FormProductListComponent {

  products: Product[] = [
    /**new Product('iPhone 16 pro max', 1200),
    new Product('iPhone 15 pro max', 1100)**/
  ];
  constructor(private fakeStoreService: FakeStoreService) {
    this.fakeStoreService.detailProductEmitter.subscribe((product: Product) =>
      alert(`Product detail: ${product.title}, ${product.price}`)
    );
  }

  ngOnInit() {
    this.fakeStoreService.getProducts().subscribe((data) => {
      this.products = data;
    });
    console.log('FormProductListComponent');
  }

  addProduct(product: Product) {
    console.log('addProduct');
    console.log(product.title);
    this.products.push(product);
    console.log(this.products);
  }
}

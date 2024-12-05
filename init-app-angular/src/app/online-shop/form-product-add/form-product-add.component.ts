import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { product } from '../product';
import { FormProductListComponent } from '../form-product-list/form-product-list.component';

@Component({
  selector: 'app-form-product-add',
  standalone: true,
  imports: [FormProductListComponent],
  templateUrl: './form-product-add.component.html',
  styleUrl: './form-product-add.component.css'
})
export class FormProductAddComponent implements AfterViewInit{

  @ViewChild(FormProductListComponent) formProductListComponent!: FormProductListComponent;

  ngAfterViewInit() {
    // Ensure the formProductListComponent is initialized
    if (this.formProductListComponent) {
      console.log('FormProductListComponent is initialized');
    } else {
      console.warn('FormProductListComponent is not initialized');
    }
  }

  addProduct(description: string, price: number) {
    console.log('add product ---- init form product add');
    console.log(description);
    console.log(price);
    console.log('add product ---- end form product add');
    let newProduct = new product(description, price);
    this.formProductListComponent.addProduct(newProduct);
    //return new product(description, price);
  }
}

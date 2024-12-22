import { Component } from '@angular/core';
import { ProductComponentComponent } from './product-component/product-component.component';

@Component({
  selector: 'app-product-list-component',
  standalone: true,
  imports: [ProductComponentComponent],
  templateUrl: './product-list-component.component.html',
  styleUrl: './product-list-component.component.css'
})
export class ProductListComponentComponent {
 title = 'Product list';
}

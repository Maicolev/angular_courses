import { Component, Input } from '@angular/core';
import { Product } from './product';
import { FakeStoreService } from '../../fake-store.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  @Input() product!: Product;

constructor(private fakestoreService: FakeStoreService) {}

emitProductDetail() {
  this.fakestoreService.detailProductEmitter.emit(this.product);
}
}

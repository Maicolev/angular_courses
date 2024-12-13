import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './online-shop/product/product';

@Injectable({
  providedIn: 'root'
})
export class FakeStoreService {

  private fakeStoreApiUrl = 'https://fakestoreapi.com/products';

  //products: Product[] = [];

  constructor(private http: HttpClient) {
    //this.loadProducts();
  }

  // Método para cargar los productos desde la API y asignarlos a 'products'
  /**private loadProducts(): void {
    this.getProducts().subscribe((data) => {
      this.products = data;
    });
    console.log("loadProducts");
  }**/

  // Método para obtener los productos desde la API
  getProducts(): Observable<any> {
    return this.http.get(this.fakeStoreApiUrl);
  }

  /**addProduct(product: Product) {
    console.log('addProduct');
    console.log(product.title);
    this.products.push(product);
    console.log(this.products);
  }**/
}

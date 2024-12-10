import { Component } from '@angular/core';
import { FormProductListComponent } from "./form-product-list/form-product-list.component";

@Component({
  selector: 'app-online-shop',
  standalone: true,
  //imports: [FormProductListComponent, FormProductAddComponent],
  templateUrl: './online-shop.component.html',
  styleUrl: './online-shop.component.css',
  imports: [FormProductListComponent]
})
export class OnlineShopComponent {
}
import { Component, ViewChild } from '@angular/core';
import { FormProductListComponent } from "./form-product-list/form-product-list.component";
import { FormProductAddComponent } from "./form-product-add/form-product-add.component";
@Component({
  selector: 'app-online-shop',
  standalone: true,
  //imports: [FormProductListComponent, FormProductAddComponent],
  templateUrl: './online-shop.component.html',
  styleUrl: './online-shop.component.css',
  imports: [FormProductListComponent, FormProductAddComponent]
})
export class OnlineShopComponent {
}
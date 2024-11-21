import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponentComponent } from "./product-list-component/product-list-component.component";
import { FatherComponent } from './father/father.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
//import { NewComponentComponent } from "./new-component/new-component.component";
//import { NewComponentInlineComponent } from "./new-component-inline/new-component-inline.component";
//import { InterpolationComponent } from "./interpolation/interpolation.component";
//import { FatherComponent } from "./father/father.component";

@Component({
  selector: 'app-root',
  standalone: true,
  //imports: [RouterOutlet, NewComponentComponent, NewComponentInlineComponent, InterpolationComponent, FatherComponent],
  imports: [RouterOutlet, EventBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Online Store';
}
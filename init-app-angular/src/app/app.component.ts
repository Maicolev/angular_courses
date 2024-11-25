import { Component } from '@angular/core';
import { LocalReferenceComponent } from "./local-reference/local-reference.component";
/**
import { RouterOutlet } from '@angular/router';
import { ProductListComponentComponent } from "./product-list-component/product-list-component.component";
import { FatherComponent } from './father/father.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { PropertyBindingComponent } from "./property-binding/property-binding.component";
import { TwoWayBindingComponent } from "./two-way-binding/two-way-binding.component";
import { CalculatorComponent } from "./calculator/calculator.component";
import { NewComponentComponent } from "./new-component/new-component.component";
import { NewComponentInlineComponent } from "./new-component-inline/new-component-inline.component";
import { InterpolationComponent } from "./interpolation/interpolation.component";
import { ConditionalsComponent } from "./conditionals/conditionals.component";
**/

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LocalReferenceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Test App';
}
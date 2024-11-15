import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponentComponent } from "./new-component/new-component.component";
import { NewComponentInlineComponent } from "./new-component-inline/new-component-inline.component";
import { InterpolationComponent } from "./interpolation/interpolation.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewComponentComponent, NewComponentInlineComponent, InterpolationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hi from AppAngular';
}

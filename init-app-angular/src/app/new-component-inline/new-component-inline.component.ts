import { Component } from '@angular/core';

@Component({
  selector: 'app-new-component-inline',
  standalone: true,
  imports: [],
  template: `
  <h1>{{title}}</h1>
    <p>
      p -> new-component-inline works!
    </p>
  `,
  styles: `
  h1 {
    color: red;
  }
  p {
    color: blue;
    font-size: 20px;
  }
  `
})
export class NewComponentInlineComponent {
  title = 'New-component-inline title!';
}
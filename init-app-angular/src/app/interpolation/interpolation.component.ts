import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  standalone: true,
  imports: [],
  templateUrl: './interpolation.component.html',
  styleUrl: './interpolation.component.css'
})

export class InterpolationComponent {
  title = 'Angular interpolation component';
  user = {
    name: 'Fuji',
    age: 12
  };

  greet() {
    return `Hello ${this.user.name}, you are ${this.user.age} years old`;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  standalone: true,
  imports: [],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css'
})
export class EventBindingComponent {
  message: string = '';

  showMessage() {
    this.message = 'Hello, do you have click on the button?';
  }

  resetMessage() {
    this.message = '';
  }
}

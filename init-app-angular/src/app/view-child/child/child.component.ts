import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  message: string = 'Message to child component works!';

  changeMessage(newMessage: string) {
    this.message = newMessage;
  }
}
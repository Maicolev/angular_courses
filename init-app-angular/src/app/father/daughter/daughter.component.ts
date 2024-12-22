import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-daughter',
  standalone: true,
  imports: [],
  templateUrl: './daughter.component.html',
  styleUrl: './daughter.component.css'
})
export class DaughterComponent {

  // !: non-null operator assertion - i promise that this variable is initialized later
  @Input() message!: string;
  @Output() notifyFather = new EventEmitter<string>();

  private title = 'Daughter component works';

  //typeScript getter
  get showTitle() {
    return this.title;
  }

  //JavaScript getter
  getTitle() {
    return this.title;
  }

  sendMessage() {
    this.notifyFather.emit('Message from daughter component to father component');
  }
}

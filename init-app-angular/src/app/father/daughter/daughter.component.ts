import { Component, Input } from '@angular/core';

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

  private title = 'Daughter component works';

  //typeScript getter
  get showTitle() {
    return this.title;
  }

  //JavaScript getter
  getTitle() {
    return this.title;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-daughter',
  standalone: true,
  imports: [],
  templateUrl: './daughter.component.html',
  styleUrl: './daughter.component.css'
})
export class DaughterComponent {
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

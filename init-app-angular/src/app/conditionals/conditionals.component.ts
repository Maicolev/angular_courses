import { Component } from '@angular/core';

@Component({
  selector: 'app-conditionals',
  standalone: true,
  imports: [],
  templateUrl: './conditionals.component.html',
  styleUrl: './conditionals.component.css'
})
export class ConditionalsComponent {
  isAutenticated: boolean = false;

  alternateAutenticated(): void {
    this.isAutenticated = !this.isAutenticated;
  }

}

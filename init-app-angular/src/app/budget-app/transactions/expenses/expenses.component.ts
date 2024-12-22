import { Component, Input } from '@angular/core';
import { Transaction } from '../transaction';

@Component({
  selector: 'app-expenses',
  standalone: true,
  imports: [],
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.css'
})
export class ExpensesComponent {
  @Input() expenses!: Transaction;
}

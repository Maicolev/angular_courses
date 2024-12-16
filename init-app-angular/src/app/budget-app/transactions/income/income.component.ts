import { Component, Input } from '@angular/core';
import { Transaction } from '../transaction';

@Component({
  selector: 'app-income',
  standalone: true,
  imports: [],
  templateUrl: './income.component.html',
  styleUrl: './income.component.css'
})
export class IncomeComponent {
  @Input() income!: Transaction;
}

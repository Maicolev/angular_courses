import { Component } from '@angular/core';
import { TransactionsComponent } from "./transactions/transactions.component";

@Component({
  selector: 'app-budget-app',
  standalone: true,
  imports: [TransactionsComponent],
  templateUrl: './budget-app.component.html',
  styleUrl: './budget-app.component.css'
})
export class BudgetAppComponent {

}

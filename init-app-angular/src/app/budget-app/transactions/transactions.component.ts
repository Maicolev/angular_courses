import { Component } from '@angular/core';
import { Transaction } from './transaction';
import { TransactionsService } from './transactions.service';
import { IncomeComponent } from './income/income.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { FormComponent } from "../form/form.component";

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [IncomeComponent, ExpensesComponent, FormComponent],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent {

  expenses: Transaction[] = [];
  incomes: Transaction[] = [];

  constructor(private transactionsService: TransactionsService) {}

  ngOnInit() {
    this.expenses = this.transactionsService.getExpenses();
    this.incomes = this.transactionsService.getIncomes();
  }

}

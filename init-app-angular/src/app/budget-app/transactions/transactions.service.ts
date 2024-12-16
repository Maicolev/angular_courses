import { Injectable } from '@angular/core';
import { Transaction } from './transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  private incomes: Transaction[] = [
    new Transaction('Monthly salary', 1000),
  ];
  private expenses: Transaction[] = [
    new Transaction('Monthly rent', 320),
    new Transaction('Electricity', 100),
    new Transaction('Internet', 80)
  ];

  constructor() { }

  addIncome(description: string, price: number) {
    this.incomes.push(new Transaction(description, price));
  }

  addExpense(description: string, price: number) {
    this.expenses.push(new Transaction(description, price));
  }

  getIncomes(): Transaction[] {
    return this.incomes;
  }

  getExpenses(): Transaction[] {
    return this.expenses;
  }

  removeIncome(index: number) {
    //this.incomes.splice(index, 1);
  }

  removeExpense(index: number) {
   // this.expenses.splice(index, 1);
  }
}

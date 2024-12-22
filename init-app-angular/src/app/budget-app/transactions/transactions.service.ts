import { Injectable } from '@angular/core';
import { Transaction } from './transaction';
import { BehaviorSubject, Observable } from 'rxjs';

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

  private incomesObservable: BehaviorSubject<Transaction[]> = new BehaviorSubject<Transaction[]>(this.incomes);
  private expensesObservable: BehaviorSubject<Transaction[]> = new BehaviorSubject<Transaction[]>(this.expenses);

  constructor() { }

  addIncome(description: string, price: number) {
    this.incomes.push(new Transaction(description, price));
    this.incomesObservable.next(this.incomes);
  }

  addExpense(description: string, price: number) {
    this.expenses.push(new Transaction(description, price));
    this.expensesObservable.next(this.expenses);
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

  getIncomesObservable(): Observable<Transaction[]> {
    return this.incomesObservable.asObservable();
  }

  getExpensesObservable(): Observable<Transaction[]> {
    return this.expensesObservable.asObservable();
  }
}

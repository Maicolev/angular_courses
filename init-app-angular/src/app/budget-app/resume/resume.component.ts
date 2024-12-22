import { Component, OnDestroy, OnInit } from '@angular/core';
import { TransactionsService } from '../transactions/transactions.service';
import { Transaction } from '../transactions/transaction';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent implements OnInit, OnDestroy{

  expenses: Transaction[] = [];
  incomes: Transaction[] = [];

  private expensesSubscription!: Subscription;
  private incomesSubscription!: Subscription;

  totalExpenses: number = 0;
  totalIncomes: number = 0;

  constructor(private transactionsService: TransactionsService) {}


  ngOnInit() {
    this.expensesSubscription = this.transactionsService.getExpensesObservable().subscribe(expenses => {
      this.expenses = expenses;
      this.totalExpenses = this.calculateTotal(expenses)
    });

    this.incomesSubscription = this.transactionsService.getIncomesObservable().subscribe(incomes => {
      this.incomes = incomes;
      this.totalIncomes = this.calculateTotal(incomes)
    });
  }

  ngOnDestroy() {
    this.expensesSubscription.unsubscribe();
    this.incomesSubscription.unsubscribe();
  }

  calculateTotal(transactions: Transaction[]){
    let totalTransaction: number = 0;
    transactions.forEach(function(transaction){
      totalTransaction += transaction.price;
    })
    return totalTransaction;
  }

}

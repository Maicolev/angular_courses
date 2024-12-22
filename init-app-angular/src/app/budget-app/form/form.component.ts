import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsService } from '../transactions/transactions.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  descriptionInput: string | null = null;
  priceInput: number | null = null;

  // 0 none type, 1 income, -1 expense
  transactionType: number = 0;

  constructor(private transactionsService: TransactionsService) {}

  setTransactionType(transactionType: number) {
    this.transactionType = transactionType;
  }

  addTransaction(event: Event) {
    event.preventDefault();

    if (this.descriptionInput && this.priceInput) {
      if (this.priceInput > 0) {
        if(this.transactionType === 1){
          this.transactionsService.addIncome(this.descriptionInput, this.priceInput);
        }
        else if(this.transactionType ===-1){
          this.transactionsService.addExpense(this.descriptionInput, this.priceInput);
        }
        this.descriptionInput = null;
        this.priceInput = null;
      }
    }
  }
}

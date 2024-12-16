import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TransactionsService } from '../transactions/transactions.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  descriptionInput: string | null = null;
  priceInput: number | null = null;

  constructor(private transactionsService: TransactionsService) {}

  // if - o + come to event, decided if it is a income or expense
  addTransaction(event: Event) {
    event.preventDefault();
    console.log(this.descriptionInput);
    console.log(this.priceInput);

    if (this.descriptionInput && this.priceInput) {
      if (this.priceInput > 0) {
        this.transactionsService.addIncome(this.descriptionInput, this.priceInput);
        this.descriptionInput = null;
        this.priceInput = null;
      }
    }
  }
}

import { Component } from '@angular/core';
import { TransactionsComponent } from "./transactions/transactions.component";
import { ResumeComponent } from "./resume/resume.component";

@Component({
  selector: 'app-budget-app',
  standalone: true,
  imports: [TransactionsComponent, ResumeComponent],
  templateUrl: './budget-app.component.html',
  styleUrl: './budget-app.component.css'
})
export class BudgetAppComponent {

}

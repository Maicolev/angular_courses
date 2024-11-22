import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  private _operatorA: number = 0;
  private _operatorB: number = 0;

  private _result: number = 0;

  get operatorA(): number {
    return this._operatorA;
  }

  get operatorB(): number {
    return this._operatorB;
  }

  get result(): number {
    return this._result;
  }

  set operatorA(operatorA: number) {
    this._operatorA = operatorA;
  }

  set operatorB(operatorB: number) {
    this._operatorB = operatorB;
  }

  set result(result: number) {
    this._result = result;
  }

  sum(){
    this.result = this._operatorA + this._operatorB;
  }
}

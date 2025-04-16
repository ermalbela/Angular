import { Component, EventEmitter, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import InvestmentInput from '../investment-input.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  // @Output() calculate = new EventEmitter<InvestmentInput>(); // without signals
  // calculate = output<InvestmentInput>(); // signals approach

  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');

  constructor(private investmentService: InvestmentService) {}

  resetVals() {
    this.enteredAnnualInvestment.set('0');
    this.enteredInitialInvestment.set('0');
    this.enteredExpectedReturn.set('5');
    this.enteredDuration.set('10');
  }

  onSubmit() {
    this.investmentService.calculateInvestmentResults({ // ----------------------SERVICE APPROACH----------------------
      initialInvestment: +this.enteredInitialInvestment(),
      annualInvestment: +this.enteredAnnualInvestment(),
      expectedReturn: +this.enteredExpectedReturn(),
      duration: +this.enteredDuration(),
    });
    // this.calculate.emit({ // ----------------------NO SERVICE APPROACH---------------------------
    //   initialInvestment: +this.enteredInitialInvestment(), //converting string to number
    //   annualInvestment: +this.enteredAnnualInvestment(),
    //   expectedReturn: +this.enteredExpectedReturn(),
    //   duration: +this.enteredDuration(),
    // });
    this.resetVals();
  }
}

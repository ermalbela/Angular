import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject, Input, input } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  // investmentResults = input<{
  //   year: number,
  //   interest: number,
  //   valueEndOfYear: number,
  //   annualInvestment: number,
  //   totalInterest: number,
  //   totalAmountInvested: number,
  // }[]>();

  // @Input() investmentResults?: {
  //   year: number,
  //   interest: number,
  //   valueEndOfYear: number,
  //   annualInvestment: number,
  //   totalInterest: number,
  //   totalAmountInvested: number,
  // }[];

  constructor(private investmentService: InvestmentService) {};
  // private investmentService = inject(InvestmentService);

  // get investmentResults(){ ==>no signals approach
  //   return this.investmentService.resultsData;
  // }

  // investmentResults = computed(() => this.investmentService.resultsData()); // option of signals approach
  investmentResults = this.investmentService.resultsData.asReadonly(); // option of signals approach

}

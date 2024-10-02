import { Injectable } from "@angular/core";
import { InvestmentInput, InvestmentResult } from "./investment-input.model";

@Injectable({providedIn: 'root'})
export class InvestmentService {

  // Calculate investment results based on provided input
  resultData?:InvestmentResult[];

  calculateInvestmentResults(data:InvestmentInput) {
    // Implement the calculation logic here
    const {initialInvestment, annualInvestment, duration, expectedReturn,} = data;
    const annualData = [];
    let investmentValue = initialInvestment;
    console.log(`investment's value: ${data.initialInvestment}`)
    
    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;

      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
  
    this.resultData = annualData
  }
}
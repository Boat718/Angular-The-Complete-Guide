import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  initialInvestment = '0';
  annualInvestment = '0';
  expectedReturn = '5';
  duration = '10';

  constructor(private investmentService:InvestmentService) {}

  onSubmit() {
    this.investmentService.calculateInvestmentResults(
      {
        initialInvestment: parseInt(this.initialInvestment),
        annualInvestment: parseInt(this.annualInvestment),
        expectedReturn: parseInt(this.expectedReturn),
        duration: parseInt(this.duration)
      }
    )
    this.initialInvestment = '0';
    this.annualInvestment = '0';
    this.expectedReturn = '5';
    this.duration = '10';
    
  }
}

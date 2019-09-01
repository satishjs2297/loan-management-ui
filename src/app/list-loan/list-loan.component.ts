import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { AlertsService } from 'angular-alert-module';

import {LoanService} from "../service/loan.service";
import {Loan} from "../model/loan.model";


@Component({
  selector: 'app-list-loan',
  templateUrl: './list-loan.component.html',
  styleUrls: ['./list-loan.component.css']
})
export class ListLoanComponent implements OnInit {

  loans: Loan[];

  constructor(private router: Router, 
    private loanService: LoanService,
    private  alerts: AlertsService) { }

  ngOnInit() {
    this.loanService.getLoans()
      .subscribe( data => {
        this.loans = data;
      });
  }
  
  addLoan(): void {
    this.router.navigate(['add-loan']);
  };

  showBalance(loan: Loan): void {
    this.alerts.setMessage('Current Balance :: '+ loan.totalAmount,'success');
  }

  payEmi(loan: Loan) {
    this.loanService.payEmi(loan).subscribe(loanData => {
      this.alerts.setMessage('Emi Paid: Current Loan Amount :: '+ loanData.totalAmount,'success');
    });
  }

  forceLoanClose(loan: Loan) {
    this.loanService.forceLoanClose(loan).subscribe(respData => {
      this.alerts.setMessage('Loan has been Sucessfully Closed','success');
      this.router.navigate(['list-loans']);
    });
  }  

  printTransactions() {
    this.router.navigate(['print-txns']);
  }
}

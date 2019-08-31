import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LoanService} from "../service/loan.service";
import {Loan} from "../model/loan.model";

@Component({
  selector: 'app-list-loan',
  templateUrl: './list-loan.component.html',
  styleUrls: ['./list-loan.component.css']
})
export class ListLoanComponent implements OnInit {

  loans: Loan[];

  constructor(private router: Router, private loanService: LoanService) { }

  ngOnInit() {
    this.loanService.getLoans()
      .subscribe( data => {
        this.loans = data;
      });
  }
  
  addLoan(): void {
    this.router.navigate(['add-loan']);
  };
}

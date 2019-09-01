import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

import {LoanService} from "../service/loan.service";
import {Transaction} from "../model/transaction.model";


@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  transactions: Transaction[];

  constructor(private router: Router, 
    private loanService: LoanService ) { }

  ngOnInit() {
    this.loanService.printTransactions()
      .subscribe( data => {
        this.transactions = data;
      });
  }
  
  backToHome(): void {
    this.router.navigate(['list-loans']);
  };
  
}

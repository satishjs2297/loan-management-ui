import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Loan} from "../model/loan.model";
import {Transaction} from "../model/transaction.model";

@Injectable()
export class LoanService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8080/abcbank/loan/';

  getLoans() {
    return this.http.get<Loan[]>(this.baseUrl + 'getAllLoans');
  }

  createLoan(loan: Loan) {
    return this.http.post(this.baseUrl + 'applyLoan', loan);
  }

  updateLoan(loan: Loan) {
    return this.http.put(this.baseUrl + loan.accountNumber, loan);
  }

  payEmi(loan: Loan) {
    return this.http.put<Loan>(this.baseUrl + 'payEmi/' + loan.accountNumber , loan);
  }

  forceLoanClose(loan: Loan) {
    return this.http.put<Loan>(this.baseUrl + 'forceclose/' + loan.accountNumber , loan);
  }

  printTransactions() {
    return this.http.get<Transaction[]>(this.baseUrl + 'getAllLoanTransactions')
  }
}

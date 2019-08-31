import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Loan} from "../model/loan.model";

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
    return this.http.put(this.baseUrl + '/' + loan.accountNumber, loan);
  }
}

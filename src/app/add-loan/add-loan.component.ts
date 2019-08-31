import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoanService} from "../service/loan.service";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-loan',
  templateUrl: './add-loan.component.html',
  styleUrls: ['./add-loan.component.css']
})
export class LoanManagementComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private loanService: LoanService) { }

  addForm: FormGroup;

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      accountNumber: ['', Validators.required],
      holder:  ['', Validators.required],
      mobileNo:  ['', Validators.required],
      city:  ['', Validators.required],
      aadharNo:  ['', Validators.required],
      salary:  ['', Validators.required],
      loanAmount:  ['', Validators.required],
      time:  ['', Validators.required],
      interestRate:  ['', Validators.required],
      totalAmount:  ['', Validators.required],      
    });

  }

  onSubmit() {
    this.loanService.createLoan(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-loans']);
      });
  }

}

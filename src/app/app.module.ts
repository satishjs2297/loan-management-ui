import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {routing} from "./app.routing";
import {AuthenticationService} from "./service/auth.service";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { LoanManagementComponent } from './add-loan/add-loan.component';
import {ListLoanComponent} from "./list-loan/list-loan.component";
import {LoanService} from "./service/loan.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListLoanComponent,
    LoanManagementComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthenticationService, LoanService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import { LoanManagementComponent } from "./add-loan/add-loan.component";
import {ListLoanComponent} from "./list-loan/list-loan.component";
import {TransactionComponent} from "./print-transactions/transaction.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'add-loan', component: LoanManagementComponent },
  { path: 'list-loans', component: ListLoanComponent },
  { path: 'print-txns', component: TransactionComponent },
  {path : '', component : LoginComponent}
];

export const routing = RouterModule.forRoot(routes);

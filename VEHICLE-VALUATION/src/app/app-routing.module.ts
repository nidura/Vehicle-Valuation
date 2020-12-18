import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ValuationComponent } from './valuation/valuation.component';
import { ReportviewComponent } from "./reportview/reportview.component";

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "login"},
  {path: "valuation", component: ValuationComponent},
  {path: "login", component: LoginComponent},
  {path: "reportview", component: ReportviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

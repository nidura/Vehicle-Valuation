import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ValuationComponent } from './valuation/valuation.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "login"},
  {path: "valuation", component: ValuationComponent},
  {path: "login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

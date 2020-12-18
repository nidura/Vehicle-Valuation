import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// Import ngx-barcode module
import { NgxBarcodeModule } from 'ngx-barcode';
import { QrCodeModule } from 'ng-qrcode';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {ValuationComponent} from './valuation/valuation.component';
import {HeaderComponent} from './header/header.component';
import { ReportviewComponent } from './reportview/reportview.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ValuationComponent,
    HeaderComponent,
    ReportviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxBarcodeModule,
    QrCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

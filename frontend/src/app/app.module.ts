import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from "@angular/forms";
import {AuthService} from "./auth.service";

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
  ],
  imports: [
    BrowserModule,
      HttpClientModule,
      AppRoutingModule,
      FormsModule
  ],
  providers: [
      AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

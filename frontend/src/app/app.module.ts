import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from "@angular/forms";
import {AuthService} from "./auth.service";
import { ProjectComponent } from './project/project.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskComponent } from './task/task.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    ProjectComponent,
    AddTaskComponent,
    TaskComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
      HttpClientModule,
      AppRoutingModule,
      FormsModule
  ],
  providers: [
      AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

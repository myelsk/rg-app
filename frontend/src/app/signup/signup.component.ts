import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    model: object = {};
    errors: [];
    onKeyUpNameInput: boolean;
    onKeyUpMailInput: boolean;
    onKeyUpPasswordInput: boolean;

  constructor(private authService: AuthService) { }

  onSignup(form: NgForm) {
    this.authService.signup(form.value.name, form.value.email, form.value.password).subscribe(
        response => console.log(response),
        error => {
          this.errors = error.error.errors;
          console.log(this.errors);
        }
    );
  }

  onKeyUpName() {
      this.onKeyUpNameInput = true;
  }

  onKeyUpMail() {
      this.onKeyUpMailInput = true;
  }

    onKeyUpPassword() {
        this.onKeyUpPasswordInput = true;
    }

  ngOnInit() {
  }

}

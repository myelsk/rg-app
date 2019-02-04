import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  error: string;
  model: object = {};
  errors: [];
  onKeyUpMailInput: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onKeyUpMail() {
    this.onKeyUpMailInput = true;
  }


  onSignin(form: NgForm) {
    this.authService.signin(form.value.email, form.value.password).subscribe(
        decodedToken => console.log(decodedToken),
        error => {
          this.error = error.error.error;
        }
    );
  }
}

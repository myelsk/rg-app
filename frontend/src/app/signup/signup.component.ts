import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

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

    constructor(private authService: AuthService, private router: Router) {
    }

    onSignup(form: NgForm) {
        this.authService.signup(form.value.name, form.value.email, form.value.password).subscribe(
            response => this.router.navigate(['signin']),
            error => {
                this.errors = error.error.errors;
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

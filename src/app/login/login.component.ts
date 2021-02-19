import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @ViewChild('emailInput') emailInput: ElementRef
  @ViewChild('passwordInput') passwordInput: ElementRef

  email: string;
  password: string;
  isLoading: boolean;
  loginError: boolean;

  constructor(
    private router: Router,
    private loginService: LoginService
  ) {

  }

  onSubmit(form) {
    this.loginError = false

    if (!form.valid) {
      form.controls.email.markAsTouched()
      form.controls.password.markAsTouched()

      if (form.controls.email.invalid) {
        this.emailInput.nativeElement.focus()
        return
      }

      if (form.controls.password.invalid) {
        this.passwordInput.nativeElement.focus()
        return
      }

      return
    }

    this.login();
  }

  login() {
    this.isLoading = true;
    this.loginService.doLogin(this.email, this.password)
      .pipe(
        finalize(() => this.isLoading = false)
      )
      .subscribe(
        response =>
          this.onLoginSuccess(),
        error => this.onLoginError()
      )
  }

  onLoginSuccess() {
    this.router.navigate(['home'])
  }

  onLoginError() {
    this.loginError = true
  }

  showErrorOnEmail(controlName: string, form: NgForm) {

    if (!form.controls[controlName]) {
      return false
    }
    return form.controls[controlName].invalid && form.controls[controlName].touched
  }
}

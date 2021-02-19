import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  @ViewChild('emailInput') emailInput: ElementRef
  @ViewChild('passwordInput') passwordInput: ElementRef

  email: string;
  password: string;

  onSubmit(form) {

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
  }

  showErrorOnEmail(controlName: string, form: FormGroup) {

    if (!form.controls[controlName]) {
      return false
    }
    return form.controls[controlName].invalid && form.controls[controlName].touched
  }
}

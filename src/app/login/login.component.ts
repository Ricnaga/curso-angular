import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form) {
    if (!form.valid) {
      form.controls.email.markAsTouched()
      form.controls.password.markAsTouched()
      return
    }
  }

  showErrorOnEmail(controlName:string , form: FormGroup) {

    if (!form.controls[controlName]) {
      return false
    }

    return form.controls[controlName].invalid && form.controls[controlName].touched
  }
}

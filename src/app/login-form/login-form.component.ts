import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'login-form',
  templateUrl: 'login-form.component.html',
  styles: [ 'login-form.component.css' ]
})

export class LoginComponent implements OnInit {
  public loginForm = this.fb.group({
    email: ["", Validators.required],
    password: ["", Validators.required]
  });
  constructor(public fb: FormBuilder, http: Http) {}
  doLogin(event) {
    console.log(event);
    console.log(this.loginForm.value);
  }
}

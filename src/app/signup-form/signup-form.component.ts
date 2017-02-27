import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { Router } from '@angular/router'
import { Bootstrap } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: [ './signup-form.component.css' ]
})

export class SignupComponent implements OnInit {
  public signupForm = this.fb.group({
    first_name: ["", Validators.required],
    last_name: ["", Validators.required],
    email: ["", Validators.required],
    password: ["", Validators.required],
    password_confirm: ["", Validators.required],
  });
  constructor(public fb: FormBuilder, http: Http) {}
  doSignup(event) {
    console.log(event);
    console.log(this.signupForm.value);
  }
  ngOnInit(): void {
}
}

import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: [ './signup-form.component.css' ]
})

export class SignupComponent implements OnInit {

  ngOnInit(): void {
    console.log('onInit');
  }
}

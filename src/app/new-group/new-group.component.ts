import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'new-group',
  templateUrl: './new-group.component.html',
  styleUrls: [ './new-group.component.css' ]
})

export class NewGroupComponent implements OnInit {
  constructor(
    public fb: FormBuilder,
    public http: Http
  ) {}

  public newGroupForm = this.fb.group({
    name: ["", Validators.required],
    location: ["", Validators.required],
    search: ""
  });

  ngOnInit(): void {
    console.log('loaded on init');
  }

  createGroup(event) {
    console.log(event);
    console.log(this.newGroupForm.value);
  }
}

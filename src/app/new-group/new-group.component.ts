import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { NewGroupService } from './new-group.service';

@Component({
  selector: 'new-group',
  templateUrl: './new-group.component.html',
  styleUrls: [ './new-group.component.css' ]
})

export class NewGroupComponent implements OnInit {
  constructor(
    private heroService: NewGroupService,
    public fb: FormBuilder,
    private location: Location,
    public http: Http
  ) {}

  public newGroupForm = this.fb.group({
    name: ["", Validators.required],
    location: ["", Validators.required],
    search: ""
  });

  ngOnInit(): void {
    // this.route.params
    //   .switchMap((params: Params) => this.heroService.getHero(+params['id']))
    //   .subscribe(hero => this.hero = hero);
  }

  createGroup(event) {
    console.log(event);
    console.log(this.newGroupForm.value);
  }

  goBack(): void {
    this.location.back();
  }
}

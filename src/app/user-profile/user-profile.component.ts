import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: [ './user-profile.component.css' ]
})

export class UserProfileComponent implements OnInit {
  ngOnInit(): void {
    console.log('loaded on init');
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: [ './landing-page.component.css' ]
})

export class LandingComponent implements OnInit {
  ngOnInit(): void {
    console.log('loaded on init');
  }
}

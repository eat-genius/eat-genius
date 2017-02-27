import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app-component/app.component';
import { SignupComponent } from './signup-form/signup-form.component';
import { LandingComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login-form/login-form.component'

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

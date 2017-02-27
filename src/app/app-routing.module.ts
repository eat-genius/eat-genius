import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './landing-page/landing-page.component'
import { SignupComponent } from './signup-form/signup-form.component'
import { LoginComponent } from './login-form/login-form.component'
import { UserProfileComponent } from './user-profile/user-profile.component'
import { NewGroupComponent } from './new-group/new-group.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LandingComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'new-group', component: NewGroupComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}

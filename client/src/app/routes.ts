import { Routes } from "@angular/router";
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupComponent } from './signup/signup.component';

const routes:Routes = [
  { path: '', redirectTo: "login", pathMatch: 'full' },
  { path: "login",  component: LoginFormComponent },
  { path: "userProfile", component: UserProfileComponent},
  { path: "signup", component: SignupComponent},
  { path: '**', redirectTo: "" },

];

export {routes};

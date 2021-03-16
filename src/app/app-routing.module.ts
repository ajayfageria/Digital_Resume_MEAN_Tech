import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './container/forgot-password/forgot-password.component';
import { LoginComponent } from './container/login/login.component';
import { SignupComponent } from './container/signup/signup.component';
import { VerificationComponent } from './container/verification/verification.component';
import { AnonGuards } from './guards/anon-guards';
import { AuthGuard } from './guards/auth-guards';

const routes: Routes = [{path:'login',component:LoginComponent,canActivate:[AnonGuards]},
{path:'signup',component:SignupComponent,canActivate:[AnonGuards]},
{path:'verify',component:VerificationComponent,canActivate:[AuthGuard]},
{path:'forgot-password',component:ForgotPasswordComponent,canActivate:[AnonGuards]},
{path:'**',component:LoginComponent,canActivate:[AnonGuards]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

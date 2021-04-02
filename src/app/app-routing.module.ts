import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './container/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './container/forgot-password/forgot-password.component';
import { LoginComponent } from './container/login/login.component';
import { OnBoardingComponent } from './container/on-boarding/on-boarding.component';
import { OnboardingIntroComponent } from './container/onboarding-intro/onboarding-intro.component';
import { SignupComponent } from './container/signup/signup.component';
import { VerificationComponent } from './container/verification/verification.component';
import { AnonGuards } from './guards/anon-guards';
import { AuthGuard } from './guards/auth-guards';
import { Onboardingcomplete } from './guards/onboardingcomplete -guards';
import { Onboardingincomplete } from './guards/onboardingincomplete-guards';
import { Verificatoncompleted } from './guards/verificationcompleted-guards';
import { Verificatonincomplete } from './guards/verificatonincomplete-guards';

const routes: Routes = [
  {
    path: '', canActivate: [AnonGuards],
    children: [
      {path: 'signup', component: SignupComponent},
      {path: 'forgot-password', component: ForgotPasswordComponent},
      {path: '', component: LoginComponent}
     ]
  },
   {
      path: '', canActivate: [AuthGuard, Verificatonincomplete], 
      children: [
        { path: 'verify', component: VerificationComponent,}
       ]
   },
   {
             path: '', 
             children: [
              {path: 'on-boarding', component: OnboardingIntroComponent}, 
              {path: 'on-boarding/add', component: OnBoardingComponent}],
             canActivate: [AuthGuard, Verificatoncompleted, Onboardingincomplete]
    },
   {
             path: '',
             children: [
               {path: 'dashboard', component: DashboardComponent}
             ],
             canActivate: [AuthGuard, Verificatoncompleted, Onboardingcomplete]
    }
 ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

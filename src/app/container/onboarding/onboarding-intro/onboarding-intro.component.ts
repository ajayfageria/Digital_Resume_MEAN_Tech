import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-onboarding-intro',
  templateUrl: './onboarding-intro.component.html',
  styleUrls: ['./onboarding-intro.component.css']
})
export class OnboardingIntroComponent implements OnInit {

  constructor(private router: Router) {
      
   }

  ngOnInit(): void {
  }
  navigate(){
    this.router.navigate(['on-boarding','add'])
  }
}

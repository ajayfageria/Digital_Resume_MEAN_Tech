import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alertService';
import { ApiService } from 'src/app/services/apiService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading:boolean=false;
  title = 'resume-app';
  loginForm: FormGroup;
  constructor(private router: Router,private apiService: ApiService,private alterService: AlertService) { 
  this.loginForm=new FormGroup({
    email: new FormControl(null,[Validators.required,Validators.email]),
    password: new FormControl(null,[Validators.required,Validators.maxLength(14),Validators.minLength(4)]),
  })}
  ngOnInit(): void {
  }
  signup(){
 this.router.navigate(['signup'])
  }
login(){
  this.apiService.loginandsettoken(this.loginForm.value).subscribe(data=>{
    this.alterService.success('login Successful');
    this.router.navigate(['verify']);
  });
}
}

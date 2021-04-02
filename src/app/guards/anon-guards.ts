import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/internal/operators/map";
import { ApiService } from "../services/apiService";
import { AuthUtils } from "../utility/auth-utils";
@Injectable()
export class AnonGuards implements CanActivate{
    constructor(private router: Router,private apiService: ApiService){

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
      if(!AuthUtils.getAuthToken()){
          console.log(!AuthUtils.getAuthToken());
          return true;
      } else{
          console.log(this.apiService.fetchMe().pipe(map(data=>{
              console.log(data);
          })));
        return this.apiService.fetchMe().pipe(map(data=>{
             if(!data.verified){
                this.router.navigate(['verify']);
             }  else if(data.onboarding !== 200){
                this.router.navigate(['on-boarding']);
             } 
             else{
                this.router.navigate(['dashboard']);
             }
         }));
        
      }
       
    }
    
}
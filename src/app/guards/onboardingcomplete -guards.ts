import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ApiService } from "../services/apiService";

@Injectable()
export class Onboardingcomplete  implements CanActivate{
    constructor(private apiService: ApiService, private router: Router){

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        return this.apiService.fetchMe().pipe(map(data=>{
            if(data.onboarding === 200) {
                return true;
            } else {
                return this.router.navigate(['on-boarding']);
            }
        }))
    }

}

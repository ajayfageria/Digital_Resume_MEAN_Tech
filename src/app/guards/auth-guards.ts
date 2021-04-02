import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { ApiService } from "../services/apiService";
import { AuthUtils } from "../utility/auth-utils";

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        console.log(!!AuthUtils.getAuthToken());
        return !!AuthUtils.getAuthToken();
    }
    
}
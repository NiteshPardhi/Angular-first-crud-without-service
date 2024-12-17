import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "../login.service";

@Injectable({
    providedIn: 'root'
})

export class CanActiveGuard implements CanActivate {
    constructor(private _authservice: LoginService, private router:Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree 
      | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if(this._authservice.isTrue){
            return true;
        } else{
            alert('Please Login First....!!!!');
            this.router.navigate(['/login']);
            return false;
        }
    }
}
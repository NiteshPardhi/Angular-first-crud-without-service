import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

type CanDeactivateType = Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;

export interface CanComponentDeactivate {
    canDeactivate: () => CanDeactivateType;
}

@Injectable({
    providedIn: 'root'
})

export class CanDeactivateGaurd implements CanDeactivate<CanComponentDeactivate>{

    constructor(){}

    canDeactivate(
        component: CanComponentDeactivate,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): CanDeactivateType {
          return component.canDeactivate ? component.canDeactivate() : true;
    }
}
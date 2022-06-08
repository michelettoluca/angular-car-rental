import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
   providedIn: "root"
})
export class RouteGuardService implements CanActivate {

   constructor(private authService: AuthService,
               private router: Router) {
   }

   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const { type, roles, redirectTo } = route.data["permissions"];

      const currentUser = this.authService.currentUser;

      const isAllowed = type === "whitelist"
         ? roles.includes(currentUser?.role)
         : !roles.includes(currentUser?.role)

      //TODO: Aggiungere reindirizzamento in base a se autenticato o no
      return isAllowed || this.router.navigate([redirectTo || ""])
   }
}

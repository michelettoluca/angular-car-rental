import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { UserRole } from "../../types";

@Component({
   selector: "app-navbar",
   templateUrl: "./navbar.component.html",
   styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {

   constructor(private authService: AuthService,
               private router: Router) {
   }

   public get UserRole(): typeof UserRole {
      return UserRole;
   }

   get currentUser() {
      return this.authService.currentUser;
   }

   ngOnInit(): void {
   }

   signOut() {
      this.authService.logout();
      this.router.navigate(["/"]).then(r => console.log(r));
   }
}

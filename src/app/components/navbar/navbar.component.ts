import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { OrderType } from "../table/table.types";
import { UserRole } from "../../services/data.service";

@Component({
   selector: "app-navbar",
   templateUrl: "./navbar.component.html",
   styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {

   constructor(private authService: AuthService,
               private router: Router) {
   }

   public get userRole(): typeof UserRole {
      return UserRole;
   }

   get currentUser() {
      return this.authService.currentUser
   }

   ngOnInit(): void {
   }

   signOut() {
      this.authService.signOut();
      this.router.navigate(["/"])
   }
}

import { Component, OnInit } from "@angular/core";
import { UsersService } from "../../services/users.service";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
   selector: "app-navbar",
   templateUrl: "./navbar.component.html",
   styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {

   constructor(private authService: AuthService,
               private router: Router) {
   }

   ngOnInit(): void {
   }

   signOut() {
      this.authService.signOut();
      this.router.navigate(["/"])
   }
}

import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { UsersService } from "../../services/users.service";
import { User } from "../../types";
import { ButtonConfig } from "../../components/button/button.types";
import * as buttonConfig from "../../configs/button";


@Component({
   selector: "app-profile",
   templateUrl: "./profile.component.html",
   styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
   editUserButton: ButtonConfig;
   deleteUserButton: ButtonConfig;

   user?: User;

   constructor(private authService: AuthService,
               private usersService: UsersService) {
      this.editUserButton = buttonConfig.editUser;
      this.deleteUserButton = buttonConfig.deleteUser;
   }

   ngOnInit(): void {
      this.usersService.findOneById(this.authService.currentUser!.id).subscribe({
         next: (user) => this.user = user
      });
   }
}

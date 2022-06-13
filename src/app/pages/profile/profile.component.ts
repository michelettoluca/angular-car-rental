import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { UsersService } from "../../services/users.service";
import { User } from "../../services/data.service";

@Component({
   selector: "app-profile",
   templateUrl: "./profile.component.html",
   styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
   user?: User;

   constructor(private authService: AuthService,
               private usersService: UsersService) {
   }

   ngOnInit(): void {
      this.usersService.findOneById(this.authService.currentUser!.id).subscribe({
         next: (user) => this.user = user
      })
   }
}

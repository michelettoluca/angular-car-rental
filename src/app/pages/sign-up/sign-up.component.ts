import { Component, OnInit } from "@angular/core";
import * as formConfig from "../../configs/form";
import { FormGroup } from "@angular/forms";
import { UsersService } from "../../services/users.service";
import { User, UserRole } from "../../services/data.service";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { switchMap } from "rxjs";

@Component({
   selector: "app-sign-up",
   templateUrl: "./sign-up.component.html",
   styleUrls: ["./sign-up.component.scss"]
})
export class SignUpComponent implements OnInit {

   signUpConfig = formConfig.signUp;

   constructor(private router: Router,
               private authService: AuthService,
               private usersService: UsersService) {
   }

   ngOnInit(): void {
   }

   handleSubmit(form: FormGroup) {
      const user: User = {
         firstName: form.value.firstName,
         lastName: form.value.lastName,
         username: form.value.username,
         password: form.value.password,
         role: UserRole.CUSTOMER,
      };

      this.usersService.add(user).pipe(
         switchMap(() => this.authService.signIn(user)),
      ).subscribe({
         next: () => this.router.navigate(["profile"])
      });
   }
}

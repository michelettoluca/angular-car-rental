import { Component, OnInit } from "@angular/core";
import * as formConfig from "../../configs/form";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { FormGroup } from "@angular/forms";
import { ErrorResponse } from "../../types";

@Component({
   selector: "app-sign-in",
   templateUrl: "./sign-in.component.html",
   styleUrls: ["./sign-in.component.scss"]
})
export class SignInComponent implements OnInit {

   error?: ErrorResponse;
   signInConfig = formConfig.signIn;

   constructor(private router: Router,
               private authService: AuthService) {
   }

   ngOnInit(): void {
   }


   handleSubmit(form: FormGroup) {
      this.authService.login(form.value).subscribe({
         next: () => {
            this.router.navigate(["profile"]);
            this.error = undefined;
         },
         error: ({ error }) => {
            this.error = error;
         }
      });
   }
}

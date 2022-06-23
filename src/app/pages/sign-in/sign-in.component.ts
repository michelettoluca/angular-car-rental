import { Component, OnInit } from "@angular/core";
import * as formConfig from "../../configs/form";
import { AuthService } from "../../services/auth.service";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
   selector: "app-sign-in",
   templateUrl: "./sign-in.component.html",
   styleUrls: ["./sign-in.component.scss"]
})
export class SignInComponent implements OnInit {

   signInConfig = formConfig.signIn;

   constructor(private router: Router,
               private authService: AuthService) {
   }

   ngOnInit(): void {
   }

   log(arg: any) {
      console.log(arg);
   }

   handleSubmit(form: FormGroup) {
      this.authService.login(form.value).subscribe({
         next: () => {
            this.router.navigate(["profile"]);
         }
      });
   }
}

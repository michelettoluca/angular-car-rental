import { Component, OnInit } from "@angular/core";
import * as formConfig from "../../configs/form";
import { AuthService } from "../../services/auth.service";
import { FormGroup } from "@angular/forms";

@Component({
   selector: "app-sign-in",
   templateUrl: "./sign-in.component.html",
   styleUrls: ["./sign-in.component.scss"]
})
export class SignInComponent implements OnInit {

   signInConfig = formConfig.signIn;

   constructor(private authService: AuthService) {
   }

   ngOnInit(): void {
   }

   log(arg: any) {
      console.log(arg)
   }

   signIn(form: FormGroup) {
      this.authService.signIn(form.value).subscribe({
         next: (aa) => {
            console.log(sessionStorage)
            console.log(aa)
         }
      })
   }
}

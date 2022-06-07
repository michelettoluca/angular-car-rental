import { Component, OnInit } from "@angular/core";
import * as formConfig from "../../configs/form";

@Component({
   selector: "app-sign-in",
   templateUrl: "./sign-in.component.html",
   styleUrls: ["./sign-in.component.scss"]
})
export class SignInComponent implements OnInit {

   signInConfig = formConfig.signIn;

   constructor() {
   }

   ngOnInit(): void {
   }

   log(arg: any) {
      console.log(arg)
   }
}

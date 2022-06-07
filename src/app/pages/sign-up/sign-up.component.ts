import { Component, OnInit } from "@angular/core";
import * as formConfig from "../../configs/form";

@Component({
   selector: "app-sign-up",
   templateUrl: "./sign-up.component.html",
   styleUrls: ["./sign-up.component.scss"]
})
export class SignUpComponent implements OnInit {

   signUpConfig = formConfig.signUp;

   constructor() {
   }

   ngOnInit(): void {
   }
   
   log(arg: any) {
      console.log(arg)
   }
}

import { Component } from "@angular/core";
import * as buttonConfig from "./components/button/button.config"
import * as formConfig from "./configs/form"

@Component({
   selector: "app-root",
   templateUrl: "./app.component.html",
   styleUrls: ["./app.component.scss"]
})
export class AppComponent {
   addButtonDark = buttonConfig.saveDark;
   addButtonLight = buttonConfig.saveLight;
   
   signInConfig = formConfig.signIn;
   signUpConfig = formConfig.signUp;

   log(arg: any) {
      console.log(arg)
   }
}

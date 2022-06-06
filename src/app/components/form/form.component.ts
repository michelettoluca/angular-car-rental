import { Component, Input, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup } from "@angular/forms";
import { FormConfig, InputField, SelectField } from "./form.types";

@Component({
   selector: "app-form",
   templateUrl: "./form.component.html",
   styleUrls: ["./form.component.scss"]
})
export class FormComponent implements OnInit {
   @Input() config!: FormConfig;
   formGroup = new FormGroup({});

   constructor() {
   }

   ngOnInit(): void {
      this.buildForm()
   }

   resetForm() {
      this.formGroup.get("firstName")?.reset()
   }

   buildForm() {
      for (const [name, control] of Object.entries(this.config)) {
         let formControl

         switch (control.type) {
            case "text":
            case "password":
            case "date":
            case "select":
               formControl = new FormControl(control.defaultValue)
               break

            case "array":
               const arrayControl = new FormArray(control.defaultValue?.map((el, idx) => {
                  return new FormControl(idx, el)
               }) || []);


               break

            default:
               formControl = new FormControl()
         }

         formControl = new FormControl(control.defaultValue)

         this.formGroup.setControl(name, formControl);
      }
   }

}

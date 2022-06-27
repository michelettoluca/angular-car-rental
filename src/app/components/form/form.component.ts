import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { FormFieldType } from "./form.types";

@Component({
   selector: "app-form",
   templateUrl: "./form.component.html",
   styleUrls: ["./form.component.scss"]
})
export class FormComponent implements OnInit {
   @Input() config!: any[];

   @Output("onSubmit") submitEvent = new EventEmitter<FormGroup>();

   formGroup: FormGroup = new FormGroup({});

   constructor() {
   }

   public get formFieldType(): typeof FormFieldType {
      return FormFieldType;
   }

   ngOnInit(): void {
      this.config.forEach((formField) => {
         this.formGroup.setControl(
            formField.key,
            new FormControl(formField.value || "", formField.validators)
         );
      });
   }

   handleSubmit() {
      this.submitEvent.emit(this.formGroup);
   }
}

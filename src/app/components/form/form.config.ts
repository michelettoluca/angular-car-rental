import { CheckboxFormField, DropdownFormField, InputFormField, RadioGroupFormField } from "./form.types";
import { Validators } from "@angular/forms";

export const formConfig = [
   new InputFormField({
      key: "firstName",
      name: "firstName",
      label: "First name",
      placeholder: "First name",
      controlType: "text",
      // required: true,
      order: 0,
   }),
   new InputFormField({
      key: "lastName",
      name: "lastName",
      label: "Last name",
      placeholder: "Last name",
      controlType: "text",
      validators: [
         Validators.required,
         Validators.maxLength(3)
      ],
      order: 1,
   }),
   new DropdownFormField({
      key: "languages",
      label: "Languages",
      name: "languages",
      value: "IT",
      options: [
         { label: "Italian", value: "IT" },
         { label: "English", value: "EN" }
      ],
      order: 2,
   }),
   new CheckboxFormField({
      key: "asdf",
      label: "Languages",
      name: "languages",
      value: false,
      validators: [
         Validators.requiredTrue
      ],
      order: 4,
   }),
   new RadioGroupFormField({
      key: "radio",
      label: "radio",
      name: "languages",
      options: [
         { label: "Uno", value: 1 },
         { label: "Due", value: 2 }
      ],
      order: 4,
   })
]

export const signIn = [
   new InputFormField({
      key: "username",
      name: "username",
      label: "Username",
      placeholder: "Username",
      controlType: "text",
      validators: [Validators.required],
      order: 1,
   }),
   new InputFormField({
      key: "password",
      name: "password",
      label: "Password",
      placeholder: "Password",
      controlType: "password",
      validators: [Validators.required],
      order: 2,
   }),
]


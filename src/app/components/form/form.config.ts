import { InputFormField } from "./form.types";
import { Validators } from "@angular/forms";

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

export const signUp = [
   new InputFormField({
      key: "firstName",
      name: "firstName",
      label: "First name",
      placeholder: "First name",
      controlType: "text",
      validators: [Validators.required],
      order: 1,
   }),

   new InputFormField({
      key: "lastName",
      name: "lastName",
      label: "Last name",
      placeholder: "Last name",
      controlType: "text",
      validators: [Validators.required],
      order: 1,
   }),

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

   new InputFormField({
      key: "repeatPassword",
      name: "repeatPassword",
      label: "Repeat password",
      placeholder: "Repeat password",
      controlType: "password",
      validators: [Validators.required],
      order: 3,
   }),
]


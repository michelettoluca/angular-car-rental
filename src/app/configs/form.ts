import { Validators } from "@angular/forms";
import { InputFormField } from "../components/form/form.types";

export const signIn = [
   new InputFormField({
      key: "username",
      name: "username",
      label: "Username",
      placeholder: "Username",
      controlType: "text",
      validators: [Validators.required]
   }),

   new InputFormField({
      key: "password",
      name: "password",
      label: "Password",
      placeholder: "Password",
      controlType: "password",
      validators: [Validators.required]
   }),
]

export const signUp = [
   new InputFormField({
      key: "firstName",
      name: "firstName",
      label: "First name",
      placeholder: "First name",
      controlType: "text",
      validators: [Validators.required]
   }),

   new InputFormField({
      key: "lastName",
      name: "lastName",
      label: "Last name",
      placeholder: "Last name",
      controlType: "text",
      validators: [Validators.required]
   }),

   new InputFormField({
      key: "username",
      name: "username",
      label: "Username",
      placeholder: "Username",
      controlType: "text",
      validators: [Validators.required]
   }),

   new InputFormField({
      key: "password",
      name: "password",
      label: "Password",
      placeholder: "Password",
      controlType: "password",
      validators: [Validators.required]
   }),

   new InputFormField({
      key: "repeatPassword",
      name: "repeatPassword",
      label: "Repeat password",
      placeholder: "Repeat password",
      controlType: "password",
      validators: [Validators.required]
   }),
]

export const editReservation = [
   new InputFormField({
      key: "beginsAt",
      name: "beginsAt",
      label: "From",
      controlType: "date",
      validators: [Validators.required]
   }),

   new InputFormField({
      key: "lastName",
      name: "lastName",
      label: "Last name",
      controlType: "date",
      validators: [Validators.required]
   }),
]


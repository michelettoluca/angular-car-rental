import { Validators } from "@angular/forms";
import { InputFormField } from "../components/form/form.types";
import { User } from "../services/data.service";

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
   })
]


const save = (arg?: {
   defaultValue?: User
}) => [
   new InputFormField({
      key: "firstName",
      name: "firstName",
      label: "First name",
      placeholder: "First name",
      controlType: "text",
      validators: [Validators.required],
      value: arg?.defaultValue?.firstName
   }),

   new InputFormField({
      key: "lastName",
      name: "lastName",
      label: "Last name",
      placeholder: "Last name",
      controlType: "text",
      validators: [Validators.required],
      value: arg?.defaultValue?.lastName
   }),

   new InputFormField({
      key: "username",
      name: "username",
      label: "Username",
      placeholder: "Username",
      controlType: "text",
      validators: [Validators.required],
      value: arg?.defaultValue?.username
   }),

   new InputFormField({
      key: "password",
      name: "password",
      label: "Password",
      placeholder: "Password",
      controlType: "password",
      validators: [Validators.required],
      value: arg?.defaultValue?.password
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


export const signUp = save();
export const editUser = (arg?: {
   defaultValue?: User
}) => save(arg);

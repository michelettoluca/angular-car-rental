import { Validators } from "@angular/forms";
import { InputFormField } from "../components/form/form.types";
import { Reservation, User, Vehicle } from "../types";

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
];


const saveUser = (arg?: {
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
];

export const editReservation = (reservation: Reservation) => [
   new InputFormField({
      key: "beginsAt",
      name: "beginsAt",
      label: "From",
      controlType: "date",
      validators: [Validators.required],
      value: reservation.beginsAt
   }),
   new InputFormField({
      key: "endsAt",
      name: "endsAt",
      label: "To",
      controlType: "date",
      validators: [Validators.required],
      value: reservation.endsAt
   }),
];

export const signUp = saveUser();

export const editUser = (arg?: {
   defaultValue?: User
}) => saveUser(arg);


export const saveVehicle = (arg?: {
   defaultValue?: Vehicle
}) => [
   new InputFormField({
      key: "brand",
      name: "brand",
      label: "Brand",
      placeholder: "Brand",
      controlType: "text",
      validators: [Validators.required],
      value: arg?.defaultValue?.brand
   }),
   new InputFormField({
      key: "model",
      name: "model",
      label: "Model",
      placeholder: "Model",
      controlType: "text",
      validators: [Validators.required],
      value: arg?.defaultValue?.model
   }),
   new InputFormField({
      key: "plateNumber",
      name: "plateNumber",
      label: "Plate number",
      placeholder: "Plate number",
      controlType: "text",
      validators: [Validators.required],
      value: arg?.defaultValue?.plateNumber
   }),
   new InputFormField({
      key: "type",
      name: "type",
      label: "Type",
      placeholder: "Type",
      controlType: "text",
      validators: [Validators.required],
      value: arg?.defaultValue?.type
   }),
];


export const addVehicle = saveVehicle();

export const editVehicle = (arg?: {
   defaultValue?: Vehicle
}) => saveVehicle(arg);

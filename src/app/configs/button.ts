import { ButtonConfig, ButtonVariant } from "../components/button/button.types";

export const saveDark: ButtonConfig = {
   variant: ButtonVariant.DARK,
   text: "Save dark",
}

export const saveLight: ButtonConfig = {
   text: "Save light",
}

export const editReservation: ButtonConfig = {
   text: "Edit reservation",
}

export const editUser: ButtonConfig = {
   text: "Edit user",
}

export const approveReservation: ButtonConfig = {
   text: "Approve reservation"
}
export const denyReservaiton: ButtonConfig = {
   variant: ButtonVariant.RED,
   text: "Deny reservation"
}

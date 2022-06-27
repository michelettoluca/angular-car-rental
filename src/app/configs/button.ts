import { ButtonConfig, ButtonVariant } from "../components/button/button.types";

export const editReservation: ButtonConfig = {
   text: "Edit reservation",
};

export const editUser: ButtonConfig = {
   text: "Edit user",
};

export const addUser: ButtonConfig = {
   text: "Add user",
};
export const deleteUser: ButtonConfig = {
   text: "Delete user",
   variant: ButtonVariant.RED
};

export const approveReservation: ButtonConfig = {
   text: "Approve reservation"
};

export const denyReservation: ButtonConfig = {
   variant: ButtonVariant.RED,
   text: "Deny reservation"
};

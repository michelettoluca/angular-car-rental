import { TableConfig } from "../components/table/table.types";
import { ReservationStatus, UserRole, Vehicle } from "../types";

export const users: TableConfig = {
   headers: [
      { key: "firstName", label: "First name" },
      { key: "lastName", label: "Last name" },
      { key: "username", label: "Username" }
   ],
   actions: [
      {
         type: "DELETE_ROW",
         label: "Delete",
      }
   ]
};

export const vehicles = (options: { roles?: UserRole[] }): TableConfig => ({
   headers: [
      { key: "brand", label: "Brand" },
      { key: "model", label: "Model" },
      { key: "plateNumber", label: "Plate #" },
      { key: "type", label: "Type" },
   ],
   filters: [
      { key: "brand", label: "Brand" },
      { key: "model", label: "Model" },
      { key: "plateNumber", label: "Plate #" },
      { key: "type", label: "Type" },
   ],
   actions: [
      {
         type: "EDIT_VEHICLE",
         label: "Edit",
         show: () => !!options.roles?.includes(UserRole.ROLE_ADMIN)
      },
      {
         type: "DELETE_VEHICLE",
         label: "Delete",
         show: () => !!options.roles?.includes(UserRole.ROLE_ADMIN)
      }
   ]
});

export const availableVehicles = {
   headers: [
      { key: "brand", label: "Brand" },
      { key: "model", label: "Model" },
      { key: "plateNumber", label: "Plate #" },
      { key: "type", label: "Type" },
   ],
   filters: [
      { key: "brand", label: "Brand" },
      { key: "model", label: "Model" },
      { key: "plateNumber", label: "Plate #" },
      { key: "type", label: "Type" },
   ],
   actions: [
      {
         type: "BOOK_RESERVATION",
         label: "Book reservation",
         show: () => true
      }
   ]
};

export const reservations: TableConfig = {
   headers: [
      {
         key: "vehicle", label: "vehicle", format: (vehicle: Vehicle) => vehicle.brand + " - " + vehicle.model
      },
      { key: "beginsAt", label: "beginsAt", format: (date: string) => new Date(date).toLocaleDateString() },
      { key: "endsAt", label: "endsAt", format: (date: string) => new Date(date).toLocaleDateString() },
      { key: "status", label: "status" }
   ],
   actions: [
      {
         type: "EDIT_RESERVATION",
         label: "Edit reservation",
      }
   ]
};


export const manageUserReservations: TableConfig = {
   headers: [
      { key: "vehicle", label: "vehicle", format: (vehicle: Vehicle) => vehicle.brand + " - " + vehicle.model },
      { key: "beginsAt", label: "beginsAt", format: (date: string) => new Date(date).toLocaleDateString() },
      { key: "endsAt", label: "endsAt", format: (date: string) => new Date(date).toLocaleDateString() },
      { key: "status", label: "status" }
   ],
   actions: [
      {
         type: "APPROVE_RESERVATION",
         label: "Approve",
         show: (reservation) => reservation.status === ReservationStatus.PENDING
      },
      {
         type: "DENY_RESERVATION",
         label: "Deny",
         show: (reservation) => reservation.status === ReservationStatus.PENDING
      }
   ]
};

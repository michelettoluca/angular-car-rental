import { TableConfig } from "../components/table/table.types";
import { ReservationStatus, UserRole } from "../types";

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
   ],
   filters: [
      { key: "brand", label: "Brand" },
      { key: "model", label: "Model" },
      { key: "plateNumber", label: "Plate #" }
   ],
   actions: [
      {
         type: "BOOK_RESERVATION",
         label: "Reserve",
         show: () => !!options.roles?.includes(UserRole.ROLE_CUSTOMER)
      },
      {
         type: "DELETE_VEHICLE",
         label: "Delete",
         show: () => !!options.roles?.includes(UserRole.ROLE_ADMIN)
      }
   ]
});

export const reservations: TableConfig = {
   headers: [
      { key: "userId", label: "userId" },
      { key: "vehicleId", label: "vehicleId" },
      { key: "beginsAt", label: "beginsAt", format: (date: string) => new Date(date).toLocaleDateString() },
      { key: "endsAt", label: "endsAt", format: (date: string) => new Date(date).toLocaleDateString() },
      { key: "status", label: "status", format: (status: ReservationStatus) => ReservationStatus[status] }
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
      { key: "userId", label: "userId" },
      { key: "vehicleId", label: "vehicleId" },
      { key: "beginsAt", label: "beginsAt", format: (date: string) => new Date(date).toLocaleDateString() },
      { key: "endsAt", label: "endsAt", format: (date: string) => new Date(date).toLocaleDateString() },
      { key: "status", label: "status", format: (status: ReservationStatus) => ReservationStatus[status] }
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

import { TableActionType, TableConfig } from "../components/table/table.types";
import { ReservationStatus, User } from "../services/data.service";


export const users: TableConfig = {
   headers: [
      { key: "firstName", label: "First name" },
      { key: "lastName", label: "Last name" },
      { key: "username", label: "Username" }
   ],
   // filters: [
   //    { key: "firstName", label: "First name" },
   //    { key: "lastName", label: "Last name" },
   // ],
   // pagination: {
   //    itemsPerPage: 3
   // },
   actions: [
      {
         type: TableActionType.EDIT_ROW,
         label: "Edit",
         row: true,
         show: (user: User) => {
            return user.firstName.toLowerCase().startsWith("lu")
         }
      },
      {
         type: TableActionType.DELETE_ROW,
         label: "Delete",
         row: true,
         show: () => true
      }
   ]
};

export const vehicles: TableConfig = {
   headers: [
      { key: "brand", label: "Brand" },
      { key: "model", label: "Model" },
      { key: "plateNumber", label: "Plate #" },
   ],
   // order: {
   //    column: "model",
   //    type: OrderType.asc
   // },
   // filters: [
   //    { key: "model", label: "Model" },
   //    { key: "brand", label: "Brand" }
   // ],
   // pagination: {
   //    itemsPerPage: 1
   // }
};

export const reservations: TableConfig = {
   headers: [
      { key: "id", label: "id" },
      { key: "userId", label: "userId" },
      { key: "vehicleId", label: "vehicleId" },
      { key: "beginsAt", label: "beginsAt", format: (date: string) => new Date(date).toLocaleDateString() },
      { key: "endsAt", label: "endsAt", format: (date: string) => new Date(date).toLocaleDateString() },
      { key: "status", label: "status", format: (status: ReservationStatus) => ReservationStatus[status] }
   ]
};

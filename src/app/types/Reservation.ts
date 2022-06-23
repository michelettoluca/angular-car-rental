import { ReservationStatus } from "./";

export interface Reservation {
   id?: number;
   userId: number;
   vehicleId: number;
   beginsAt: Date;
   endsAt: Date;
   status: ReservationStatus;
}

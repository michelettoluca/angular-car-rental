import { ReservationStatus } from "../ReservationStatus";

export interface ReservationSaveRequest {
   id: number;
   from: string;
   to: string;
   status: ReservationStatus;
   userId: number;
   vehicleId: number;
}

import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";

export interface User {
   id?: number
   username: string
   firstName: string
   lastName: string
   password: string
}

export interface Vehicle {
   id?: number
   brand: string
   model: string
   dateOfRegistration: Date
   plateNumber: string
   type: string
}

export interface Reservation {
   id?: number
   userId: number
   vehicleId: number
   beginsAt: Date
   endsAt: Date
   status: ReservationStatus
}

export enum ReservationStatus {
   PENDING,
   APPROVED,
   DENIED
}

@Injectable({
   providedIn: "root",
})
export class InMemoryDataService implements InMemoryDbService {
   createDb() {
      const users: User[] = [
         { id: 12, firstName: "Mario", lastName: "Rossi", username: "m.rossi", password: "asd" },
         { id: 13, firstName: "Pietro", lastName: "Smusi", username: "p.smusi", password: "asd" },
         { id: 14, firstName: "Orazio", lastName: "Grinzosi", username: "o.grinzosi", password: "asd" },
         { id: 15, firstName: "Luca", lastName: "Micheletto", username: "l.micheletto", password: "asd" },
         { id: 16, firstName: "Silvio", lastName: "Berlusconi", username: "s.berlusconi", password: "asd" },
         { id: 17, firstName: "Mario", lastName: "Balotelli", username: "m.balotelli", password: "asd" },
         { id: 18, firstName: "Benedetta", lastName: "Parodi", username: "b.parodi", password: "asd" },
      ];

      const vehicles: Vehicle[] = [
         {
            id: 11,
            brand: "Fiat",
            model: "Panda",
            dateOfRegistration: new Date(),
            plateNumber: "BP075AC",
            type: "car"
         },
         {
            id: 12,
            brand: "Renault",
            model: "Clio",
            dateOfRegistration: new Date(),
            plateNumber: "AC420SE",
            type: "car"
         }
      ];
      const reservations: Reservation[] = [
         {
            id: 11,
            userId: 13,
            vehicleId: 12,
            beginsAt: new Date(),
            endsAt: new Date(),
            status: ReservationStatus.PENDING
         },
         {
            id: 12,
            userId: 15,
            vehicleId: 11,
            beginsAt: new Date(),
            endsAt: new Date(),
            status: ReservationStatus.APPROVED
         },
         {
            id: 13,
            userId: 16,
            vehicleId: 11,
            beginsAt: new Date(),
            endsAt: new Date(),
            status: ReservationStatus.DENIED
         },
         {
            id: 13,
            userId: 16,
            vehicleId: 11,
            beginsAt: new Date(),
            endsAt: new Date(),
            status: ReservationStatus.PENDING
         },
      ];

      return { users, vehicles, reservations };
   }

   genId<T extends User | Vehicle | Reservation>(myTable: T[]): number {
      return myTable.length > 0 ? Math.max(...myTable.map(t => t.id!)) + 1 : 11;
   }
}

import { Component, OnInit } from "@angular/core";

import * as tableConfig from "../../configs/table";
import * as formConfig from "../../configs/form";

import { Reservation } from "../../services/data.service";
import { ReservationsService } from "../../services/reservations.service";
import { AuthService } from "../../services/auth.service";
import { VehiclesService } from "../../services/vehicles.service";
import { TableEvent } from "../../components/table/table.types";

@Component({
   selector: "app-reservations",
   templateUrl: "./reservations.component.html",
   styleUrls: ["./reservations.component.scss"]
})
export class ReservationsComponent implements OnInit {
   reservationsTable = tableConfig.reservations;

   editReservationFrom = formConfig.editReservation;
   editReservationFromData?: Reservation;

   reservations?: Reservation[];

   from?: Date;
   to?: Date;

   _showModal: boolean = false;

   constructor(private authService: AuthService,
               private vehiclesService: VehiclesService,
               private reservationsService: ReservationsService) {
   }

   ngOnInit(): void {
      this.reservationsService.findManyByUserId(this.authService.currentUser!.id).subscribe({
         next: (reservations) => this.reservations = reservations
      });
   }

   showModal({ payload: reservation }: TableEvent) {
      this._showModal = true;
      this.editReservationFromData = reservation;
   }
}

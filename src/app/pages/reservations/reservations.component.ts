import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";

import * as tableConfig from "../../configs/table";
import * as formConfig from "../../configs/form";
import * as buttonConfig from "../../configs/button";

import { Reservation } from "../../services/data.service";
import { ReservationsService } from "../../services/reservations.service";

@Component({
   selector: "app-reservations",
   templateUrl: "./reservations.component.html",
   styleUrls: ["./reservations.component.scss"]
})
export class ReservationsComponent implements OnInit {
   reservationsTable = tableConfig.reservations;
   editReservationFrom = formConfig.editReservation;
   editReservationButton = buttonConfig.editReservation;

   reservations$!: Observable<Reservation[]>;

   showModal: boolean = false;

   constructor(private reservationsService: ReservationsService) {
   }

   ngOnInit(): void {
      this.fetchData()
   }

   fetchData() {
      this.reservations$ = this.reservationsService.findAll()
   }

   toggleShowModal() {
      this.showModal = !this.showModal;
   }
}

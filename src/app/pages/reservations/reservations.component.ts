import { Component, OnInit } from "@angular/core";
import * as tableConfig from "../../configs/table";
import { Reservation } from "../../services/data.service";
import { Observable } from "rxjs";
import { ReservationsService } from "../../services/reservations.service";

@Component({
   selector: "app-reservations",
   templateUrl: "./reservations.component.html",
   styleUrls: ["./reservations.component.scss"]
})
export class ReservationsComponent implements OnInit {
   reservationsTable = tableConfig.reservations;

   reservations$!: Observable<Reservation[]>;

   constructor(private reservationsService: ReservationsService) {
   }

   ngOnInit(): void {
      this.fetchData()
   }

   fetchData() {
      this.reservations$ = this.reservationsService.findAll()
   }
}

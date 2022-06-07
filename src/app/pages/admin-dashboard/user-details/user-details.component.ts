import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { UsersService } from "../../../services/users.service";
import { Observable, pipe, switchMap, tap } from "rxjs";
import { Reservation, User } from "../../../services/data.service";
import { ReservationsService } from "../../../services/reservations.service";

@Component({
   selector: "app-user-details",
   templateUrl: "./user-details.component.html",
   styleUrls: ["./user-details.component.scss"]
})
export class UserDetailsComponent implements OnInit {

   user$: Observable<User> = new Observable<User>()
   reservations$: Observable<Reservation[]> = new Observable<Reservation[]>()

   constructor(
      private usersService: UsersService,
      private reservationService: ReservationsService,
      private route: ActivatedRoute
   ) {

   }

   ngOnInit(): void {
      this.route.paramMap.subscribe({
         next: (params) => {
            const id = Number(params.get("id"));
            this.user$ = this.usersService.findOneById(id);
            this.reservations$ = this.reservationService.findManyByUserId(id);
         }
      })
   }
}

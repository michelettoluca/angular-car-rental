import { Component, OnInit } from "@angular/core";

import * as tableConfig from "../../configs/table";
import * as formConfig from "../../configs/form";

import { ReservationsService } from "../../services/reservations.service";
import { AuthService } from "../../services/auth.service";
import { VehiclesService } from "../../services/vehicles.service";
import { TableEvent } from "../../components/table/table.types";
import { ErrorResponse, Reservation, ReservationStatus, User, Vehicle } from "../../types";
import { FormControl, FormGroup } from "@angular/forms";
import { FormField } from "../../components/form/form.types";

@Component({
   selector: "app-reservations",
   templateUrl: "./reservations.component.html",
   styleUrls: ["./reservations.component.scss"]
})
export class ReservationsComponent implements OnInit {
   reservationsTable = tableConfig.reservations;
   availableVehiclesTable = tableConfig.availableVehicles;

   editReservationError?: ErrorResponse;
   selectedReservation?: { id: number, user: User, vehicle: Vehicle, beginsAt: Date, endsAt: Date, status: ReservationStatus };
   editReservationFrom?: FormField<any>[];

   reservations?: Reservation[];

   availableVehicles?: Vehicle[];
   findAvailableVehiclesForm: FormGroup;


   constructor(private authService: AuthService,
               private vehiclesService: VehiclesService,
               private reservationsService: ReservationsService) {
      this.findAvailableVehiclesForm = new FormGroup({
         from: new FormControl(),
         to: new FormControl()
      });
   }

   ngOnInit(): void {
      this.findReservations();
   }

   findReservations(): void {
      const { id } = this.authService.currentUser!;
      this.reservationsService.findManyByUserId(id).subscribe({
         next: (reservations) => this.reservations = reservations
      });
   }

   selectReservation({ payload: reservation }: TableEvent) {
      this.selectedReservation = reservation;
      this.editReservationFrom = formConfig.editReservation(reservation);
   }

   findAvailableVehicles(from: Date, to: Date) {
      // const { from, to } = this.findAvailableVehiclesForm.value;

      this.vehiclesService.findAvailable(from, to).subscribe({
         next: (availableVehicles) => {
            this.availableVehicles = availableVehicles;
         }
      });
   }

   bookReservation({ payload }: any) {
      const { from, to } = this.findAvailableVehiclesForm.value;
      const { id } = this.authService.currentUser!;

      this.reservationsService.add({
         beginsAt: from,
         endsAt: to,
         status: ReservationStatus.PENDING,
         userId: id,
         vehicleId: payload.id
      }).subscribe({
         next: () => this.findAvailableVehicles(this.findAvailableVehiclesForm.value.from, this.findAvailableVehiclesForm.value.to)
      });
   }

   editReservation(form: FormGroup) {
      const { id, user, vehicle, status } = this.selectedReservation!;
      const { beginsAt: from, endsAt: to } = form.value;

      console.log({
         id,
         from,
         to,
         status,
         userId: user.id!,
         vehicleId: vehicle.id!,
      });

      this.reservationsService.edit({
         id,
         from,
         to,
         status,
         userId: user.id!,
         vehicleId: vehicle.id!,
      }).subscribe({
         next: () => {
            this.findReservations();
            this.editReservationError = undefined;
         }, error: ({ error }) => {
            console.log(error);
            this.editReservationError = error;
         }
      });
   }
}

import { Component, OnInit } from "@angular/core";
import { UsersService } from "../../services/users.service";
import { ReservationsService } from "../../services/reservations.service";
import { ButtonConfig } from "../../components/button/button.types";

import * as buttonConfig from "../../configs/button";
import * as formConfig from "../../configs/form";
import * as tableConfig from "../../configs/table";
import { FormField } from "../../components/form/form.types";
import { TableConfig, TableEvent } from "../../components/table/table.types";
import { Reservation, ReservationStatus, User } from "../../types";
import { FormGroup } from "@angular/forms";

@Component({
   selector: "app-admin-dashboard",
   templateUrl: "./admin-dashboard.component.html",
   styleUrls: ["./admin-dashboard.component.scss"]
})
export class AdminDashboardComponent implements OnInit {
   users?: User[];

   user?: User;
   reservations?: Reservation[];

   deleteUserButton: ButtonConfig = buttonConfig.deleteUser;
   editUserButton: ButtonConfig = buttonConfig.editUser;
   approveReservationButton: ButtonConfig = buttonConfig.approveReservation;
   denyReservationButton: ButtonConfig = buttonConfig.denyReservation;
   manageReservationsTable: TableConfig = tableConfig.manageUserReservations;

   editUserForm?: FormField<any>[];
   addUserForm: FormField<any>[];

   constructor(private usersService: UsersService,
               private reservationsService: ReservationsService) {
      this.addUserForm = formConfig.signUp;
   }

   get ReservationStatus(): typeof ReservationStatus {
      return ReservationStatus;
   }

   ngOnInit(): void {
      this.fetchUsers();
   }

   fetchUsers() {
      this.usersService.findAll().subscribe({
         next: (users) => {
            this.users = users;
         }
      });
   }

   selectUser(user: User) {
      this.user = user;

      this.fetchUserReservations();
   }

   toggleEditUserForm() {
      this.editUserForm = this.editUserForm
         ? undefined
         : formConfig.editUser({ defaultValue: this.user });
   }

   editUser(form: FormGroup) {
      const editedUser: User = {
         role: this.user?.role,
         ...form.value,
         id: this.user!.id,
      };

      this.usersService.edit(editedUser).subscribe({
         next: () => {
            this.editUserForm = undefined;
            this.fetchUsers();
            this.user = editedUser;
         }
      });
   }

   addUser(form: FormGroup) {
      this.usersService.add(form.value).subscribe({
         next: () => {
            this.fetchUsers();
            form.reset();
         }
      });
   }

   deleteUser() {
      this.usersService.delete(this.user!.id!).subscribe({
         next: () => {
            this.fetchUsers();
            this.user = undefined;
         }
      });
   }


   editReservationStatus({ action, payload: reservation }: TableEvent) {
      const status = action === "APPROVE_RESERVATION"
         ? ReservationStatus.APPROVED
         : ReservationStatus.DENIED;

      this.reservationsService
         .edit({ ...reservation, status }).subscribe({
            next: () => this.fetchUserReservations()
         }
      );
   }

   fetchUserReservations() {
      this.reservationsService.findManyByUserId(this.user!.id!).subscribe({
         next: (reservations) => this.reservations = reservations
      });
   }

}

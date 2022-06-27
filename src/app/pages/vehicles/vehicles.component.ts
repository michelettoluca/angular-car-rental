import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { VehiclesService } from "../../services/vehicles.service";
import { AuthService } from "../../services/auth.service";
import { FormField } from "../../components/form/form.types";
import { Event, Vehicle } from "../../types";
import * as tableConfig from "../../configs/table";
import * as formConfig from "../../configs/form";

@Component({
   selector: "app-vehicles",
   templateUrl: "./vehicles.component.html",
   styleUrls: ["./vehicles.component.scss"]
})
export class VehiclesComponent implements OnInit {
   vehiclesTable = tableConfig.vehicles({
      roles: this.authService.currentUser?.roles
   });

   vehicles?: Vehicle[];

   addVehicleFrom: FormField<any>[];

   selectedVehicle?: Vehicle;
   editVehicleForm?: FormField<any>[];

   constructor(private vehiclesService: VehiclesService,
               private authService: AuthService) {

      this.addVehicleFrom = formConfig.addVehicle;
   }

   ngOnInit(): void {
      this.fetchData();
   }

   fetchData(): void {
      this.vehiclesService.findAll().subscribe({
         next: (vehicles) => this.vehicles = vehicles
      });
   }

   handleTableEvent({ action, payload }: Event) {
      switch (action) {
         case "DELETE_VEHICLE":
            this.vehiclesService.delete(payload.id).subscribe({
               next: () => this.fetchData()
            });
            break;

         case "EDIT_VEHICLE":
            this.selectedVehicle = undefined;
            setTimeout(() => {
               this.selectedVehicle = payload;
               this.editVehicleForm = formConfig.editVehicle({ defaultValue: payload });
            }, 0);
            break;

         default:
            console.error("Unhandled action: " + action);
      }
   }

   handleAddFormSubmit(form: FormGroup) {
      if (form.invalid) return console.error("Cannot submit, form is invalid");
      this.vehiclesService.add(form.value).subscribe({
         next: () => {
            this.fetchData();
            form.reset();
         }
      });

   }

   handleEditFormSubmit(form: FormGroup) {
      if (form.invalid) return console.error("Cannot submit, form is invalid");

      console.log({ id: this.selectedVehicle?.id, ...form.value });

      this.vehiclesService.edit({ id: this.selectedVehicle?.id, ...form.value }).subscribe({
         next: () => {
            this.fetchData();
            this.selectedVehicle = undefined;
            form.reset();
         }
      });

   }
}

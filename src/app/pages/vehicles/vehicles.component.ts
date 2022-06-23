import { Component, OnInit } from "@angular/core";
import { VehiclesService } from "../../services/vehicles.service";
import * as tableConfig from "../../configs/table";
import { AuthService } from "../../services/auth.service";
import { TableEvent } from "../../components/table/table.types";
import { Vehicle } from "../../types";

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

   constructor(
      private vehiclesService: VehiclesService,
      private authService: AuthService
   ) {
   }

   ngOnInit(): void {
      this.vehiclesService.findAll().subscribe({
         next: (vehicles) => this.vehicles = vehicles
      });
   }

   handleEvent({ action, payload }: TableEvent) {
      switch (action) {
         case "DELETE_VEHICLE":
            this.vehiclesService.delete(payload.id).subscribe();
            break;

         default:
            console.error("Unhandled action");
      }

   }
}

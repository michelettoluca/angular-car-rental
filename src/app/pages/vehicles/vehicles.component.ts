import { Component, OnInit } from "@angular/core";
import { VehiclesService } from "../../services/vehicles.service";
import { Observable } from "rxjs";
import { Vehicle } from "../../services/data.service";
import * as tableConfig from "../../configs/table";

@Component({
   selector: "app-vehicles",
   templateUrl: "./vehicles.component.html",
   styleUrls: ["./vehicles.component.scss"]
})
export class VehiclesComponent implements OnInit {
   vehiclesTable = tableConfig.vehicles;

   vehicles$!: Observable<Vehicle[]>;

   constructor(private vehiclesService: VehiclesService) {
   }

   ngOnInit(): void {
      this.vehicles$ = this.vehiclesService.findAll();
   }
}

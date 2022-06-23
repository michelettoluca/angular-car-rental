import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, Observable, of } from "rxjs";
import { ReservationsService } from "./reservations.service";
import { Vehicle } from "../types";
import { environment } from "../environments/environment";

@Injectable({
   providedIn: "root"
})
export class VehiclesService {
   private vehiclesBaseUrl = "api/vehicles";

   constructor(private http: HttpClient,
               private reservationsService: ReservationsService) {
      this.vehiclesBaseUrl = environment.API_BASE_URL + "/vehicles";
   }

   findAll() {
      return this.http.get<Vehicle[]>(this.vehiclesBaseUrl).pipe(
         catchError(this.handleError<Vehicle[]>("getVehicles", []))
      );
   }

   findOneById(id: number): Observable<Vehicle> {
      return this.http.get<Vehicle>(`${this.vehiclesBaseUrl}/by/id/${id}`).pipe(
         catchError(this.handleError<Vehicle>(`getVehicle id=${id}`))
      );
   }

   add(Vehicle: Vehicle): Observable<Vehicle> {
      console.log(Vehicle);
      return this.http.post<Vehicle>(this.vehiclesBaseUrl, Vehicle).pipe(
         catchError(this.handleError<Vehicle>("addVehicle"))
      );
   }

   edit(Vehicle: Vehicle): Observable<any> {
      return this.http.put(this.vehiclesBaseUrl, Vehicle).pipe(
         catchError(this.handleError<any>("updateVehicle"))
      );
   }

   delete(id: number): Observable<Vehicle> {
      return this.http.delete<Vehicle>(`${this.vehiclesBaseUrl}/by/id${id}`).pipe(
         catchError(this.handleError<Vehicle>("deleteVehicle"))
      );
   }

   private handleError<T>(operation = "operation", result?: T) {
      return (error: any): Observable<T> => {
         console.error(operation, error);
         return of(result as T);
      };
   }


}

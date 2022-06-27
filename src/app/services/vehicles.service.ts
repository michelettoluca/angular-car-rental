import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, Observable, of } from "rxjs";
import { Vehicle } from "../types";
import { environment } from "../environments/environment";

@Injectable({
   providedIn: "root"
})
export class VehiclesService {
   private vehiclesBaseUrl = "api/vehicles";

   constructor(private http: HttpClient) {
      this.vehiclesBaseUrl = environment.API_BASE_URL + "/vehicles";
   }

   findAll(): Observable<Vehicle[]> {
      return this.http.get<Vehicle[]>(this.vehiclesBaseUrl).pipe(
         catchError(this.handleError<Vehicle[]>("getVehicles", []))
      );
   }

   findAvailable(from: Date, to: Date): Observable<Vehicle[]> {
      return this.http.get<Vehicle[]>(`${this.vehiclesBaseUrl}/available?from=${from}&to=${to}`).pipe(
         catchError(this.handleError<Vehicle[]>(`getAvailableVehicles`))
      );
   }

   findOneById(id: number): Observable<Vehicle> {
      return this.http.get<Vehicle>(`${this.vehiclesBaseUrl}/by/id/${id}`).pipe(
         catchError(this.handleError<Vehicle>(`getVehicle id=${id}`))
      );
   }

   add(vehicle: Vehicle): Observable<Vehicle> {
      return this.http.post<Vehicle>(this.vehiclesBaseUrl, vehicle).pipe(
         catchError(this.handleError<Vehicle>("addVehicle"))
      );
   }

   edit(vehicle: Vehicle): Observable<Vehicle> {
      return this.http.put<Vehicle>(`${this.vehiclesBaseUrl}/by/id/${vehicle.id}`, vehicle).pipe(
         catchError(this.handleError<Vehicle>("updateVehicle"))
      );
   }

   delete(id: number): Observable<Vehicle> {
      return this.http.delete<Vehicle>(`${this.vehiclesBaseUrl}/by/id/${id}`).pipe(
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

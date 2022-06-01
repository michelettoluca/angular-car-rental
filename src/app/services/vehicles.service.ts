import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, Observable, of } from "rxjs";
import { Vehicle } from "./data.service";

@Injectable({
   providedIn: "root"
})
export class VehiclesService {
   private vehiclesUrl = "api/vehicles"

   private httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
   };

   constructor(private http: HttpClient) {
   }

   private handleError<T>(operation = "operation", result?: T) {
      return (error: any): Observable<T> => {
         console.error(operation, error);
         return of(result as T);
      };
   }

   findAll() {
      return this.http.get<Vehicle[]>(this.vehiclesUrl).pipe(
         catchError(this.handleError<Vehicle[]>("getVehicles", []))
      );
   }

   findOneById(id: number): Observable<Vehicle> {
      return this.http.get<Vehicle>(`${this.vehiclesUrl}/${id}`).pipe(
         catchError(this.handleError<Vehicle>(`getVehicle id=${id}`))
      );
   }

   add(Vehicle: Vehicle): Observable<Vehicle> {
      console.log(Vehicle)
      return this.http.post<Vehicle>(this.vehiclesUrl, Vehicle, this.httpOptions).pipe(
         catchError(this.handleError<Vehicle>("addVehicle"))
      );
   }

   edit(Vehicle: Vehicle): Observable<any> {
      return this.http.put(this.vehiclesUrl, Vehicle, this.httpOptions).pipe(
         catchError(this.handleError<any>("updateVehicle"))
      );
   }

   delete(id: number): Observable<Vehicle> {
      return this.http.delete<Vehicle>(`${this.vehiclesUrl}/${id}`, this.httpOptions).pipe(
         catchError(this.handleError<Vehicle>("deleteVehicle"))
      );
   }
}

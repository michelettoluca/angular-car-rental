import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, Observable, of } from "rxjs";
import { Reservation } from "./data.service";

@Injectable({
   providedIn: "root"
})
export class ReservationsService {
   private reservationsUrl = "api/reservations"

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
      return this.http.get<Reservation[]>(this.reservationsUrl).pipe(
         catchError(this.handleError<Reservation[]>("getReservations", []))
      );
   }

   findOneById(id: number): Observable<Reservation> {
      return this.http.get<Reservation>(`${this.reservationsUrl}/${id}`).pipe(
         catchError(this.handleError<Reservation>(`getReservation id=${id}`))
      );
   }

   add(reservation: Reservation): Observable<Reservation> {
      return this.http.post<Reservation>(this.reservationsUrl, reservation, this.httpOptions).pipe(
         catchError(this.handleError<Reservation>("addReservation"))
      );
   }

   edit(reservation: Reservation): Observable<any> {
      return this.http.put(this.reservationsUrl, reservation, this.httpOptions).pipe(
         catchError(this.handleError<any>("updateReservation"))
      );
   }

   delete(id: number): Observable<Reservation> {
      return this.http.delete<Reservation>(`${this.reservationsUrl}/${id}`, this.httpOptions).pipe(
         catchError(this.handleError<Reservation>("deleteReservation"))
      );
   }
}

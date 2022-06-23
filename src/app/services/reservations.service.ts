import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, Observable, of, } from "rxjs";
import { environment } from "../environments/environment";
import { Reservation } from "../types";

@Injectable({
   providedIn: "root"
})
export class ReservationsService {
   private reservationsBaseUrl: string;

   constructor(private http: HttpClient) {
      this.reservationsBaseUrl = environment.API_BASE_URL + "/reservations";
   }

   findAll() {
      return this.http.get<Reservation[]>(this.reservationsBaseUrl).pipe(
         catchError(this.handleError<Reservation[]>("getReservations", []))
      );
   }

   findOneById(id: number): Observable<Reservation> {
      return this.http.get<Reservation>(`${this.reservationsBaseUrl}/by/id/${id}`).pipe(
         catchError(this.handleError<Reservation>(`getReservation id=${id}`))
      );
   }

   add(reservation: Reservation): Observable<Reservation> {
      return this.http.post<Reservation>(this.reservationsBaseUrl, reservation).pipe(
         catchError(this.handleError<Reservation>("addReservation"))
      );
   }

   edit(reservation: Reservation): Observable<any> {
      return this.http.put(this.reservationsBaseUrl, reservation).pipe(
         catchError(this.handleError<any>("updateReservation"))
      );
   }

   delete(id: number): Observable<Reservation> {
      return this.http.delete<Reservation>(`${this.reservationsBaseUrl}/by/id/${id}`).pipe(
         catchError(this.handleError<Reservation>("deleteReservation"))
      );
   }

   findManyByUserId(id: number): Observable<Reservation[]> {
      return this.http.get<Reservation[]>(`${this.reservationsBaseUrl}/by/user-id/${id}`).pipe(
         catchError(this.handleError<Reservation[]>("findManyByUserId", []))
      );
   }

   // findBetweenDates(from: Date, to: Date): Observable<Reservation[]> {
   //    return this.findAll().pipe(
   //       map((reservations) => {
   //          return reservations.filter((reservation) =>
   //             reservation.endsAt >= from
   //             && reservation.beginsAt <= to
   //             && reservation.status !== ReservationStatus.APPROVED);
   //       })
   //    );
   // }

   private handleError<T>(operation = "operation", result?: T) {
      return (error: any): Observable<T> => {
         console.error(operation, error);
         return of(result as T);
      };
   }
}

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, Observable, of, } from "rxjs";
import { environment } from "../environments/environment";
import { Reservation } from "../types";
import { ReservationSaveRequest } from "../types/request/ReservationSaveRequest";

@Injectable({
   providedIn: "root"
})
export class ReservationsService {
   private reservationsBaseUrl: string;

   constructor(private http: HttpClient) {
      this.reservationsBaseUrl = environment.API_BASE_URL + "/reservations";
   }

   findAll(): Observable<Reservation[]> {
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

   edit(reservation: ReservationSaveRequest): Observable<Reservation> {
      return this.http.put<Reservation>(`${this.reservationsBaseUrl}/by/id/${reservation.id}`, reservation).pipe(
         catchError(this.handleError<Reservation>("updateReservation"))
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

   private handleError<T>(operation = "operation", result?: T) {
      return (error: any): Observable<T> => {
         console.error(operation, error);
         return of(result as T);
      };
   }
}

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, Observable, of } from "rxjs";
import { User } from "../types";
import { environment } from "../environments/environment";


@Injectable({
   providedIn: "root"
})
export class UsersService {
   private usersBaseUrl: string;

   constructor(private http: HttpClient) {
      this.usersBaseUrl = environment.API_BASE_URL + "/users";
   }

   findAll() {
      return this.http.get<User[]>(this.usersBaseUrl).pipe(
         catchError(this.handleError<User[]>("getUsers", []))
      );
   }

   findOneById(id: number): Observable<User> {
      return this.http.get<User>(`${this.usersBaseUrl}/by/id/${id}`).pipe(
         catchError(this.handleError<User>(`getUser id=${id}`))
      );
   }

   findOneByUsername(username: string): Observable<User> {
      return this.http.get<User>(`${this.usersBaseUrl}/by/username/${username}`).pipe(
         catchError(this.handleError<User>(`getUser id=${username}`))
      );
   }

   add(user: User): Observable<User> {
      return this.http.post<User>(this.usersBaseUrl, user);
      // .pipe(
      // catchError(this.handleError<User>("addUser")));
   }

   edit(user: User): Observable<any> {
      return this.http.put(`${this.usersBaseUrl}/by/id/${user.id}`, user).pipe(
         catchError(this.handleError<any>("updateUser"))
      );
   }

   delete(id: number): Observable<User> {
      return this.http.delete<User>(`${this.usersBaseUrl}/by/id/${id}`).pipe(
         catchError(this.handleError<User>("deleteUser"))
      );
   }

   private handleError<T>(operation = "operation", result?: T) {
      return (error: any): Observable<T> => {
         console.error(operation, error);
         return of(result as T);
      };
   }
}

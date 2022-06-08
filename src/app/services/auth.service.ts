import { Injectable } from "@angular/core";
import { map, Observable, } from "rxjs";
import { UsersService } from "./users.service";
import { User, UserRole } from "./data.service";

@Injectable({
   providedIn: "root"
})
export class AuthService {

   constructor(private usersService: UsersService) {
   }

   signIn({ username, password }: { username: string, password: string }): Observable<User | undefined> {
      return this.usersService.findOneByUsername(username).pipe(
         map((u) => {

            let passwordMatch = false;
            if (u?.password === password) {
               passwordMatch = true;
               sessionStorage.setItem("access_token", u.username + ":" + u.id + ":" + u.role)
            }


            return passwordMatch ? u : undefined
         })
      );
   }

   signOut() {
      sessionStorage.removeItem("access_token")
   }

   get accessToken() {
      return sessionStorage.getItem("access_token")
   }

   get currentUser() {
      if (!this.accessToken) return undefined;

      const [username, id, role] = this.accessToken.split(":")

      return { username, id: Number(id), role: Number(role) }
   }
}

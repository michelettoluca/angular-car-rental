import { Injectable } from "@angular/core";
import { Observable, tap, } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
import { JwtHelperService } from "@auth0/angular-jwt";
import { LoginRequest } from "../types/response/LoginRequest";
import { AccessTokenResponse, DecodedAccessToken } from "../types";

@Injectable({
   providedIn: "root"
})
export class AuthService {

   authBaseUrl: string;
   jwtHelper: JwtHelperService;

   constructor(private http: HttpClient) {
      this.authBaseUrl = environment.API_BASE_URL + "/auth/login";
      this.jwtHelper = new JwtHelperService();
   }

   get accessToken(): string | null {
      return sessionStorage.getItem("access_token");
   }

   get currentUser(): DecodedAccessToken | null {
      if (!this.accessToken) return null;

      return this.jwtHelper.decodeToken(this.accessToken) as DecodedAccessToken;

      // return { id: Number(id), roles: roles };
   }

   login(credentials: LoginRequest): Observable<AccessTokenResponse> {
      return this.http.post<AccessTokenResponse>(this.authBaseUrl, credentials).pipe(
         tap(({ access_token }) => {
            sessionStorage.setItem("access_token", access_token);
         })
      );
   }

   logout(): void {
      sessionStorage.removeItem("access_token");
   }
}

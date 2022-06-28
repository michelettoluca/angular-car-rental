import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class JwtInterceptor implements HttpInterceptor {

   constructor() {
   }

   intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
      let _request: HttpRequest<unknown>;
      
      if (!sessionStorage.getItem("access_token")) {
         _request = request;

      } else {
         _request = request.clone({
            setHeaders:
               {
                  "Authorization": "Bearer " + sessionStorage.getItem("access_token"),
                  "Content-Type": "application/json"
               }
         });

      }

      return next.handle(_request);
   }
}

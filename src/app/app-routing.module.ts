import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { VehiclesComponent } from "./pages/vehicles/vehicles.component";
import { ReservationsComponent } from "./pages/reservations/reservations.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { UsersComponent } from "./pages/users/users.component";
import { SignInComponent } from "./pages/sign-in/sign-in.component";
import { SignUpComponent } from "./pages/sign-up/sign-up.component";
import { AdminDashboardComponent } from "./pages/admin-dashboard/admin-dashboard.component";
import { RouteGuardService } from "./services/route-guard.service";
import { UserRole } from "./types";

const routes: Routes = [
   { path: "vehicles", component: VehiclesComponent },
   { path: "reservations", component: ReservationsComponent },
   { path: "profile", component: ProfileComponent },
   { path: "users", component: UsersComponent },
   { path: "sign-in", component: SignInComponent },
   {
      path: "sign-up", component: SignUpComponent,
      canActivate: [RouteGuardService],
      data: {
         permissions: {
            type: "blacklist",
            roles: [UserRole.ROLE_ADMIN, UserRole.ROLE_CUSTOMER],
            redirectTo: "/profile"
         }
      }
   },
   {
      path: "admin-dashboard", component: AdminDashboardComponent,
      canActivate: [RouteGuardService],
      data: {
         permissions: {
            type: "whitelist",
            roles: [UserRole.ROLE_ADMIN],
            redirectTo: "profile"
         }
      }

   },
   { path: "**", redirectTo: "" }
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule {
}

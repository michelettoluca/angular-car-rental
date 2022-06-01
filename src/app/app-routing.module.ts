import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { VehiclesComponent } from "./components/vehicles/vehicles.component";
import { ReservationsComponent } from "./components/reservations/reservations.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { UsersComponent } from "./components/users/users.component";

const routes: Routes = [
   { path: "vehicles", component: VehiclesComponent },
   { path: "reservations", component: ReservationsComponent },
   { path: "profile", component: ProfileComponent },
   { path: "users", component: UsersComponent },
   { path: "**", redirectTo: "" }
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule {
}

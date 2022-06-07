import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { NavbarComponent } from "./components/navbar/navbar.component";
import { TableModule } from "./components/table/table.module";
import { FormComponent } from "./components/form/form.component";
import { ButtonComponent } from "./components/button/button.component";
import { FormEntries } from "./components/form/pipes/entries";

import { VehiclesComponent } from "./pages/vehicles/vehicles.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { ReservationsComponent } from "./pages/reservations/reservations.component";
import { SignInComponent } from "./pages/sign-in/sign-in.component";
import { SignUpComponent } from "./pages/sign-up/sign-up.component";
import { UsersComponent } from "./pages/users/users.component";

import { InMemoryDataService } from "./services/data.service";
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { UserDetailsComponent } from './pages/admin-dashboard/user-details/user-details.component';


@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      VehiclesComponent,
      ProfileComponent,
      ReservationsComponent,
      FormComponent,
      UsersComponent,
      ButtonComponent,
      FormEntries,
      SignInComponent,
      SignUpComponent,
      AdminDashboardComponent,
      UserDetailsComponent,
   ],
   imports: [
      HttpClientModule,
      HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
      BrowserModule,
      AppRoutingModule,
      TableModule,
      ReactiveFormsModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule {
}

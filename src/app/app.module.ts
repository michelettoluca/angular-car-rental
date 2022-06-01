import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { TableModule } from "./components/table/table.module";
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./services/data.service";
import { VehiclesComponent } from "./components/vehicles/vehicles.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { ReservationsComponent } from "./components/reservations/reservations.component";
import { FormComponent } from './components/form/form.component';
import { UsersComponent } from './components/users/users.component';

@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      VehiclesComponent,
      ProfileComponent,
      ReservationsComponent,
      FormComponent,
      UsersComponent,
   ],
   imports: [
      HttpClientModule,
      HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
      BrowserModule,
      AppRoutingModule,
      TableModule,
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule {
}

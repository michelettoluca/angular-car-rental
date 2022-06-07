import { Component, OnInit } from "@angular/core";
import { UsersService } from "../../services/users.service";

@Component({
   selector: "app-admin-dashboard",
   templateUrl: "./admin-dashboard.component.html",
   styleUrls: ["./admin-dashboard.component.scss"]
})
export class AdminDashboardComponent implements OnInit {
   users$ = this.usersService.findAll();

   constructor(private usersService: UsersService) {
   }

   ngOnInit(): void {
   }
}

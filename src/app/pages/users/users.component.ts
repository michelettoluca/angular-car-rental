import { Component, OnInit } from "@angular/core";
import { User } from "../../services/data.service";
import * as tableConfig from "../../configs/table";
import { Observable } from "rxjs";
import { UsersService } from "../../services/users.service";
import { TableActionType, TableEvent } from "../../components/table/table.types";

const emptyUser = { firstName: "", lastName: "", username: "", password: "" };

@Component({
   selector: "app-users",
   templateUrl: "./users.component.html",
   styleUrls: ["./users.component.scss"]
})
export class UsersComponent implements OnInit {
   usersTable = tableConfig.users;

   tmpEditUser: User | null = null;
   tmpAddUser: User = { ...emptyUser };

   users$!: Observable<User[]>;

   constructor(private usersService: UsersService) {
   }

   ngOnInit(): void {
      this.fetchData()
   }

   fetchData() {
      this.users$ = this.usersService.findAll();
   }

   handleEvent(event: TableEvent) {
      switch (event.action.type) {
         case TableActionType.EDIT_ROW: {
            this.tmpEditUser = event.payload;
            break;
         }

         case TableActionType.DELETE_ROW: {
            const user: User = event.payload;
            this.usersService.delete(user.id!).subscribe({
               next: () => this.fetchData()
            });
            break;
         }
      }
   }

   addUser() {
      this.usersService.add(this.tmpAddUser).subscribe({
         next: () => {
            this.tmpAddUser = { ...emptyUser };
            this.fetchData()
         }
      });


      this.fetchData()
   }

   editUser() {
      this.usersService.edit(this.tmpEditUser!).subscribe({
         next: () => {
            this.tmpEditUser = null;
            this.fetchData()
         }
      });
   }
}

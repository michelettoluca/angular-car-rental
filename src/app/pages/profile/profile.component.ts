import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { UsersService } from "../../services/users.service";
import { ReservationStatus, User } from "../../types";
import { ButtonConfig } from "../../components/button/button.types";
import * as buttonConfig from "../../configs/button";
import * as formConfig from "../../configs/form";
import { FormField } from "../../components/form/form.types";
import { FormGroup } from "@angular/forms";


@Component({
   selector: "app-profile",
   templateUrl: "./profile.component.html",
   styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
   editUserButton: ButtonConfig;
   deleteUserButton: ButtonConfig;

   editUserForm?: FormField<any>[];

   user?: User;

   constructor(private authService: AuthService,
               private usersService: UsersService) {
      this.editUserButton = buttonConfig.editUser;
      this.deleteUserButton = buttonConfig.deleteUser;
   }

   get ReservationStatus(): typeof ReservationStatus {
      return ReservationStatus;
   }

   ngOnInit(): void {
      this.fetchUser();
   }

   fetchUser(): void {
      this.usersService.findOneById(this.authService.currentUser!.id).subscribe({
         next: (user) => this.user = user
      });
   }

   toggleEditUserForm() {
      this.editUserForm = this.editUserForm
         ? undefined
         : formConfig.editUser({ defaultValue: this.user });
   }


   handleEdit(form: FormGroup) {
      const editedUser: User = {
         role: this.user?.role,
         ...form.value,
         id: this.user!.id,
      };

      this.usersService.edit(editedUser).subscribe({
         next: () => {
            this.editUserForm = undefined;
            this.fetchUser();
            this.user = editedUser;
         }
      });
   }

   handleDelete() {
      this.usersService.delete(this.authService.currentUser!.id).subscribe();
   }
}

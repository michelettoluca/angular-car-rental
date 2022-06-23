import { UserRole } from "./";

export interface User {
   id?: number;
   username: string;
   firstName: string;
   lastName: string;
   role: UserRole;
   password: string;
}

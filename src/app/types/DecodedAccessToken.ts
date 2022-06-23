import { UserRole } from "./UserRole";

export interface DecodedAccessToken {
   id: number,
   roles: UserRole[]
}

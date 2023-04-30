import { Roles } from "App/Services/Utils/Constants";

export default interface UserDto {
  name: string;
  email: string;
  password: string;
  cpf: string;
  sector?: string;
  phone?: string;
  role: Roles;
}

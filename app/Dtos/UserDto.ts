import { Roles } from "App/Services/Utils/Enums";

export default interface UserDto {
  name: string;
  email: string;
  password: string;
  cpf?: string;
  sector?: string;
  phone?: string;
  role?: Roles;
}

export interface FilterUser {
  search?: string | null;
  page: number;
  limit?: number;
}

export interface DataUser {
  id: string;
  name: string;
  email: string;
  status: boolean;
  avatar: string | null;
  cpf: string | null;
  phone: string | null;
  sector: string;
  role: Roles;
}

export interface PaginatedUser {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
  first_page: number;
  first_page_url: string;
  last_page_url: string;
  next_page_url: string | null;
  previous_page_url: string | null;
  data: DataUser[];
}

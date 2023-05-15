import { Gender } from "App/Services/Utils/Enums";
import { DateTime } from "luxon";

export default interface TeacherDto {
  name: string;
  email: string;
  phone: string;
  gender: Gender;
  department: string;
  birthDate: DateTime;
  hireDate: DateTime;
}

export interface FilterTeacher {
  search?: string | null;
  page: number;
  limit?: number;
}

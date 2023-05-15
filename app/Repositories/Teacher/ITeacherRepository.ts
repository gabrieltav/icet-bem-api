import TeacherDto, { FilterTeacher } from "App/Dtos/TeacherDto";
import Teacher from "App/Models/Teacher";

export default interface ITeacherRepository {
  create: (teacherDto: TeacherDto) => Promise<Teacher>;
  show: (id: string) => Promise<Teacher>;
  showByEmail: (email: string) => Promise<Teacher>;
  index: (filter: FilterTeacher) => Promise<Teacher[]>;
  update: (id: string, partialTeacher: Partial<TeacherDto>) => Promise<void>;
  delete: (id: string) => Promise<void>;
}

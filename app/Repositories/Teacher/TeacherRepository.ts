import TeacherDto, { FilterTeacher } from "App/Dtos/TeacherDto";
import Teacher from "App/Models/Teacher";
import ITeacherRepository from "./ITeacherRepository";

export default class TeacherRepository implements ITeacherRepository {
  public async create(teacherDto: TeacherDto): Promise<Teacher> {
    return await Teacher.create(teacherDto);
  }

  public async show(id: string): Promise<Teacher> {
    return await Teacher.findOrFail(id);
  }

  public async showByEmail(email: string): Promise<Teacher> {
    return await Teacher.findByOrFail("email", email);
  }

  public async index(filter: FilterTeacher): Promise<Teacher[]> {
    return await Teacher.query()
      .if(filter.search, (query) => {
        query.where("name", "ilike", `%${filter.search}%`);
        query.orWhere("email", "ilike", `%${filter.search}%`);
      })
      .paginate(filter.page, filter.limit);
  }

  public async update(
    id: string,
    partialTeacher: Partial<TeacherDto>
  ): Promise<void> {
    const teacher = await Teacher.findOrFail(id);
    teacher.merge(partialTeacher);
    await teacher.save();
  }

  public async delete(id: string): Promise<void> {
    await Teacher.query().where("id", id).delete();
  }
}

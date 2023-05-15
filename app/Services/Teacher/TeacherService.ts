import TeacherDto, { FilterTeacher } from "App/Dtos/TeacherDto";
import Teacher from "App/Models/Teacher";
import ITeacherRepository from "App/Repositories/Teacher/ITeacherRepository";

export default class TeacherService {
  constructor(private readonly teacherRepository: ITeacherRepository) {}

  public async create(teacherDto: TeacherDto): Promise<Teacher> {
    return await this.teacherRepository.create(teacherDto);
  }

  public async show(id: string): Promise<Teacher> {
    return await this.teacherRepository.show(id);
  }

  public async showByEmail(email: string): Promise<Teacher> {
    return await this.teacherRepository.showByEmail(email);
  }

  public async index(filter: FilterTeacher): Promise<Teacher[]> {
    return await this.teacherRepository.index(filter);
  }

  public async update(id: string, Teacher: Partial<TeacherDto>): Promise<void> {
    return await this.teacherRepository.update(id, Teacher);
  }

  public async delete(id: string): Promise<void> {
    return await this.teacherRepository.delete(id);
  }
}

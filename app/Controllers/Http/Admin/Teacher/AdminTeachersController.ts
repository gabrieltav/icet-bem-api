import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

import ITeacherRepository from "App/Repositories/Teacher/ITeacherRepository";
import TeacherRepository from "App/Repositories/Teacher/TeacherRepository";
import TeacherService from "App/Services/Teacher/TeacherService";
import CreateTeacherValidator from "App/Validators/Teacher/CreateTeacherValidator";
import UpdateUserValidator from "App/Validators/User/UpdateUserValidator";

export default class AdminTeachersController {
  private teacherService: TeacherService;
  private teacherRepository: ITeacherRepository;

  constructor() {
    this.teacherRepository = new TeacherRepository();
    this.teacherService = new TeacherService(this.teacherRepository);
  }

  public async create({ request, response }: HttpContextContract) {
    const teacherDto = await request.validate(CreateTeacherValidator);
    await this.teacherService.create(teacherDto);
    return response.created();
  }

  public async index({ request, response }: HttpContextContract) {
    const { page = 1, limit = 8, search } = request.qs();
    const teachers = await this.teacherService.index({
      search: search,
      page: page,
      limit: limit,
    });
    return response.ok(teachers);
  }

  public async show({ params, response }: HttpContextContract) {
    const { teacherId } = params;
    const teacher = await this.teacherService.show(teacherId);
    return response.ok(teacher);
  }

  public async update({
    params,
    request,
    response,
  }: HttpContextContract): Promise<void> {
    const { teacherId } = params;
    const teacher = await this.teacherRepository.show(teacherId);
    const userDto = await request.validate(UpdateUserValidator);
    await this.teacherService.update(teacher.id, userDto);
    return response.noContent();
  }

  public async delete({ params, response }: HttpContextContract) {
    const { teacherId } = params;
    const teacher = await this.teacherService.show(teacherId);
    await this.teacherService.delete(teacher.id);
    return response.noContent();
  }
}

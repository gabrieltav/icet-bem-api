import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

import IOperatorRepository from "App/Repositories/Operator/IOperatorRepository";
import OperatorRepository from "App/Repositories/Operator/OperatorRepository";
import OperatorService from "App/Services/Operator/OperatorService";
import CreateUserValidator from "App/Validators/User/CreateUserValidator";
import UpdateUserValidator from "App/Validators/User/UpdateUserValidator";

export default class AdminOperatorsController {
  private operatorService: OperatorService;
  private operatorRepository: IOperatorRepository;

  constructor() {
    this.operatorRepository = new OperatorRepository();
    this.operatorService = new OperatorService(this.operatorRepository);
  }

  public async create({ request, response }: HttpContextContract) {
    const operatorDto = await request.validate(CreateUserValidator);
    await this.operatorService.create(operatorDto);
    return response.created();
  }

  public async index({ request, response }: HttpContextContract) {
    const { page = 1, limit = 8, search } = request.qs();
    const users = await this.operatorService.index({
      search: search,
      page: page,
      limit: limit,
    });
    return response.ok(users);
  }

  public async show({ params, response }: HttpContextContract) {
    const { operatorId } = params;
    const operator = await this.operatorService.show(operatorId);
    return response.ok(operator);
  }

  public async update({
    params,
    request,
    response,
  }: HttpContextContract): Promise<void> {
    const { operatorId } = params;
    const operator = await this.operatorRepository.show(operatorId);
    const userDto = await request.validate(UpdateUserValidator);
    await this.operatorService.update(operator.id, userDto);
    return response.noContent();
  }

  public async delete({ params, response }: HttpContextContract) {
    const { operatorId } = params;
    const operator = await this.operatorService.show(operatorId);
    await this.operatorService.delete(operator.id);
    return response.noContent();
  }
}

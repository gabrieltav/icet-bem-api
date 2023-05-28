import UserDto, { FilterUser, PaginatedUser } from "App/Dtos/UserDto";
import User from "App/Models/User";
import IOperatorRepository from "App/Repositories/Operator/IOperatorRepository";
import { Roles } from "../Utils/Enums";

export default class OperatorService {
  constructor(private readonly operatorRepository: IOperatorRepository) {}

  public async create(user: UserDto): Promise<User> {
    return await this.operatorRepository.create({...user, role:Roles.OPERATOR});
  }

  public async show(id: string): Promise<User> {
    return await this.operatorRepository.show(id);
  }

  public async showByEmail(email: string): Promise<User> {
    return await this.operatorRepository.showByEmail(email);
  }

  public async index(filter: FilterUser): Promise<PaginatedUser> {
    return await this.operatorRepository.index(filter);
  }

  public async update(id: string, user: Partial<UserDto>): Promise<void> {
    return await this.operatorRepository.update(id, user);
  }

  public async delete(id: string): Promise<void> {
    return await this.operatorRepository.delete(id);
  }
}

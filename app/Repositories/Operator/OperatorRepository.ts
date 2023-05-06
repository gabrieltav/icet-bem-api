import Database from "@ioc:Adonis/Lucid/Database";
import { ModelPaginatorContract } from "@ioc:Adonis/Lucid/Orm";
import UserDto, { DataUser, FilterUser, PaginatedUser } from "App/Dtos/UserDto";
import User from "App/Models/User";
import { Roles } from "App/Services/Utils/Enums";
import IOperatorRepository from "./IOperatorRepository";

export default class OperatorRepository implements IOperatorRepository {
  public async create(user: UserDto): Promise<User> {
    return await User.create(user);
  }

  public async show(id: string): Promise<User> {
    return await User.findOrFail(id);
  }

  public async showByEmail(email: string): Promise<User> {
    return await User.findByOrFail("email", email);
  }

  public async index(filter: FilterUser): Promise<PaginatedUser> {
    const users: ModelPaginatorContract<User> = await User.query()
      .select("users.*")
      .whereIn("role", [Roles.OPERATOR])
      .if(filter.search, (query) => {
        query.where("name", "ilike", `%${filter.search}%`);
        query.orWhere("email", "ilike", `%${filter.search}%`);
      })
      .paginate(filter.page, filter.limit);

    const data = await this.dataUser(users);

    const result: PaginatedUser = {
      ...users.toJSON().meta,
      data: data,
    };

    return result;
  }

  public async update(
    id: string,
    partialUser: Partial<UserDto>
  ): Promise<void> {
    const user = await User.findOrFail(id);
    user.merge(partialUser);
    await user.save();
  }

  public async delete(id: string): Promise<void> {
    await User.query().where("id", id).delete();
  }

  public async deleteAllAuthTokens(userId: string): Promise<void> {
    await Database.from("api_tokens").where("user_id", userId).delete();
  }

  private async dataUser(
    users: ModelPaginatorContract<User>
  ): Promise<DataUser[]> {
    return users.toJSON().data.map(
      (user) =>
        ({
          id: user.id,
          name: user.name,
          email: user.email,
          status: user.status,
          avatar: user.avatar,
          cpf: user.cpf,
          phone: user.phone,
          sector: user.sector,
          role: user.role,
        } as DataUser)
    );
  }
}

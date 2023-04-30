import Database from "@ioc:Adonis/Lucid/Database";
import UserDto from "App/Dtos/UserDto";
import User from "App/Models/User";
import IUserRepository from "./IUserRepository";

export default class UserRepository implements IUserRepository {
  public async create(user: UserDto): Promise<User> {
    return await User.create(user);
  }

  public async show(id: string): Promise<User> {
    return await User.findOrFail(id);
  }

  public async showByEmail(email: string): Promise<User> {
    return await User.findByOrFail("email", email);
  }

  public async index(search: string): Promise<User[]> {
    return await User.query()
      .whereILike("name", `%${search}%`)
      .orWhereILike("email", `%${search}%`);
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
}

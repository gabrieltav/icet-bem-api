import { test } from "@japa/runner";
import UserDto from "App/Dtos/UserDto";
import User from "App/Models/User";
import IUserRepository from "App/Repositories/User/IUserRepository";
import UserService from "App/Services/User/UserService";
import { Roles } from "App/Services/Utils/Enums";

test.group("User Service", (group) => {
  let userRepository: UserRepositoryTest;
  let userService: UserService;

  group.each.setup(async () => {
    userRepository = new UserRepositoryTest();
    userService = new UserService(userRepository);
  });
  // Write your test here

  test("test if service.create send and return the correct data from repository", async ({
    assert,
  }) => {
    const userDto: UserDto = {
      name: "Gabriel",
      email: "gabriel@gmail",
      password: "123123",
      cpf: "037-547-343-67",
      role: Roles.OPERATOR,
    };
    const user = await userService.create(userDto);
    assert.equal(userRepository.defaultUser, user);
  });

  test("test if service.show send and return the correct data from repository", async ({
    assert,
  }) => {
    const id = "6541";
    const user: User = await userService.show(id);
    assert.equal(user.id, userRepository.defaultUser.id);
  });

  test("test if service.showByEmail send and return the correct data from repository", async ({
    assert,
  }) => {
    const email = "gabriel@gmail.com";
    const user: User = await userService.showByEmail(email);
    assert.equal(user.email, userRepository.defaultUser.email);
  });

  test("test if service.index send and return the correct data from repository", async ({
    assert,
  }) => {
    const search = "Gabriel";
    const users: User[] = await userService.index(search);
    assert.equal(users[0].name, userRepository.defaultUser.name);
  });

  test("test if service.update send and return the correct data from repository", async ({
    assert,
  }) => {
    const id = "6541";
    const userDto: Partial<UserDto> = {
      name: "Gabriel",
      email: "gabriel@gmail",
    };
    await userService.update(id, userDto);
    assert.include(userRepository.defaultUser, { id, ...userDto });
  });

  test("test if service.delete send and return the correct data from repository", async ({
    assert,
  }) => {
    const id = "6541";
    await userService.delete(id);
    assert.include(userRepository.defaultUser, { id });
  });
});

class UserRepositoryTest implements IUserRepository {
  public defaultUser = new User();

  public async create(user: UserDto): Promise<User> {
    this.defaultUser.merge(user);
    return this.defaultUser;
  }

  public async show(id: string): Promise<User> {
    this.defaultUser.id = id;
    return this.defaultUser;
  }

  public async showByEmail(email: string): Promise<User> {
    this.defaultUser.email = email;
    return this.defaultUser;
  }

  public async index(search: string): Promise<User[]> {
    this.defaultUser.name = search;
    return [this.defaultUser];
  }

  public async update(
    id: string,
    partialUser: Partial<UserDto>
  ): Promise<void> {
    this.defaultUser.merge({ id, ...partialUser });
  }

  public async delete(id: string): Promise<void> {
    this.defaultUser.merge({ id });
  }

  public async deleteAllAuthTokens(id: string): Promise<void> {
    this.defaultUser.merge({ id });
  }
}

import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import UserDto from "App/Dtos/UserDto";
import UserRepository from "App/Repositories/User/UserRepository";
import PasswordService from "App/Services/User/PasswordService";
import UpdatePasswordValidator from "App/Validators/User/Password/UpdatePasswordValidator";

export default class PasswordsController {
  private passwordService: PasswordService;

  constructor() {
    const userRepository = new UserRepository();
    this.passwordService = new PasswordService(userRepository);
  }

  public async resetPassword({ request, auth, response }: HttpContextContract) {
    const loggedUser = await auth.authenticate();
    const userDto: Pick<UserDto, "password"> = await request.validate(
      UpdatePasswordValidator
    );
    this.passwordService.resetPassword(loggedUser.id, userDto);
    return response.noContent();
  }
}

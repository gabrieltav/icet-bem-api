import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { Roles } from "App/Services/Utils/Enums";
import { ErrorMessages } from "App/Services/Utils/ErrorConstants";

export default class UserIsAdmin {
  public async handle(
    { auth, response }: HttpContextContract,
    next: () => Promise<void>
  ) {
    const loggedUser = await auth.authenticate();

    if (loggedUser.role !== Roles.ADMIN) {
      return response.unauthorized({ message: ErrorMessages.FORBIDDEN });
    }

    await next();
  }
}

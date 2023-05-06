import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import LoginValidator from "App/Validators/User/LoginValidator";

export default class OperatorController {
  public async signin({ request, auth, response }: HttpContextContract) {
    const { email, password } = await request.validate(LoginValidator);
    const token = await auth.attempt(email, password);
    return response.ok({ token });
  }
}

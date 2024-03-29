import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { CustomMessages, rules, schema } from "@ioc:Adonis/Core/Validator";
import { Roles } from "App/Services/Utils/Enums";

export default class CreateUserValidator {
  constructor(protected ctx: HttpContextContract) {}

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string({}, [ rules.alpha() ])
   *    ```
   *
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string({}, [
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */
  private role = Object.values(Roles);
  public schema = schema.create({
    name: schema.string(),
    email: schema.string({}, [
      rules.email(),
      rules.unique({ table: "users", column: "email" }),
    ]),
    password: schema.string({}, [rules.minLength(6), rules.maxLength(32)]),
    cpf: schema.string({}, [
      rules.minLength(11),
      rules.maxLength(11),
      rules.unique({ table: "users", column: "cpf" }),
    ]),
    phone: schema.string(),
    sector: schema.string(),
    role: schema.enum.optional(this.role),
  });

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages: CustomMessages = {
    "email.unique": "Já existe um usuário com este email",
    "cpf.unique": "Já existe um usuário com este cpf",
    "cpf.maxLength": "O CPF deve ter no máximo 11 caracteres",
    "role.enum":
      "O campo role deve ser um dos seguintes valores: " + this.role.join(", "),
  };
}

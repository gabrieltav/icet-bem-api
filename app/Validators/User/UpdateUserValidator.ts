import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { CustomMessages, rules, schema } from "@ioc:Adonis/Core/Validator";

export default class UpdateUserValidator {
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
  public schema = schema.create({
    name: schema.string.optional(),
    email: schema.string.optional({}, [
      rules.email(),
      rules.unique({ table: "users", column: "email" }),
    ]),
    cpf: schema.string.optional({}, [
      rules.minLength(11),
      rules.maxLength(11),
      rules.unique({ table: "users", column: "cpf" }),
    ]),
    phone: schema.string.optional(),
    sector: schema.string.optional(),
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
    "email.unique":
      "Este email já está sendo utilizado. Por favor, verifique se o seu email está correto ou tente usar outro.",
    "cpf.unique":
      "Este CPF já está sendo utilizado. Por favor, verifique se o seu CPF está correto ou tente usar outro.",
    "cpf.maxLength": "O CPF deve ter no máximo 11 caracteres.",
  };
}

import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { CustomMessages, schema } from "@ioc:Adonis/Core/Validator";
import { Gender } from "App/Services/Utils/Enums";

export default class UpdateTeacherValidator {
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
  private gender = Object.values(Gender);
  public schema = schema.create({
    name: schema.string.optional(),
    matriculation: schema.string.optional(),
    email: schema.string.optional(),
    phone: schema.string.optional(),
    gender: schema.enum.optional(this.gender),
    department: schema.string.optional(),
    birthDate: schema.date.optional(),
    hireDate: schema.date.optional(),
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
    "gender.enum":
      "O campo state deve ser um dos seguintes valores: " +
      this.gender.join(", "),
  };
}

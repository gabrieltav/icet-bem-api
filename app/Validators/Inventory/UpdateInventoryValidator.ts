import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { CustomMessages, rules, schema } from "@ioc:Adonis/Core/Validator";
import { InventoryState } from "App/Services/Utils/Enums";

export default class UpdateInventoryValidator {
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
  private state = Object.values(InventoryState);
  public schema = schema.create({
    description: schema.string.optional(),
    patrimony: schema.string.optional(),
    state: schema.enum.optional(this.state),
    dateOfAcquisition: schema.date.optional(),
    value: schema.number.optional(),
    term: schema.string.optional(),
    locationId: schema.string.optional({}, [
      rules.exists({ table: "locations", column: "id" }),
    ]),
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
    "state.enum":
      "O campo state deve ser um dos seguintes valores: " +
      this.state.join(", "),
  };
}

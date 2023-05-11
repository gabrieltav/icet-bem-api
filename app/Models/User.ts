import Hash from "@ioc:Adonis/Core/Hash";
import { beforeSave, column } from "@ioc:Adonis/Lucid/Orm";
import { Roles } from "App/Services/Utils/Enums";
import { DateTime } from "luxon";
import UuidBase from "./Base/UuidBase";

export default class User extends UuidBase {
  @column()
  public name: string;

  @column()
  public email: string;

  @column({ serializeAs: null })
  public password: string;

  @column()
  public status: boolean;

  @column()
  public avatar: string;

  @column()
  public cpf: string;

  @column()
  public phone: string;

  @column()
  public sector: string;

  @column()
  public role: Roles;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password);
    }
  }
}

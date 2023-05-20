import { column } from "@ioc:Adonis/Lucid/Orm";
import { Gender } from "App/Services/Utils/Enums";
import { DateTime } from "luxon";
import UuidBase from "./Base/UuidBase";

export default class Teacher extends UuidBase {
  @column()
  public name: string;

  @column()
  public matriculation: string;

  @column()
  public email: string;

  @column()
  public phone: string;

  @column()
  public gender: Gender;

  @column()
  public department: string;

  @column.date()
  public birthDate: DateTime;

  @column.date()
  public hireDate: DateTime;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}

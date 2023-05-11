import { HasOne, column, hasOne } from "@ioc:Adonis/Lucid/Orm";
import { InventoryState } from "App/Services/Utils/Enums";
import { DateTime } from "luxon";
import UuidBase from "./Base/UuidBase";
import InventoryLocation from "./InventoryLocation";

export default class Inventory extends UuidBase {
  @column()
  public name: string;

  @column()
  public description: string;

  @column()
  public assetTag: string;

  @column()
  public qrcode: string;

  @column()
  public state: InventoryState;

  @column.date()
  public date: DateTime;

  @column()
  public value: string;

  @column()
  public term: string;

  @hasOne(() => InventoryLocation)
  public location: HasOne<typeof InventoryLocation>;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}

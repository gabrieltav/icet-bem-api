import { BelongsTo, belongsTo, column } from "@ioc:Adonis/Lucid/Orm";
import { DateTime } from "luxon";
import UuidBase from "./Base/UuidBase";
import Inventory from "./Inventory";

export default class InventoryLocation extends UuidBase {
  @column()
  public inventoryId: string;

  @column()
  public room_number: string;

  @column()
  public floor: string;

  @column()
  public block: string;

  @column()
  public building: string;

  @column()
  public department: string;

  @belongsTo(() => Inventory)
  public inventory: BelongsTo<typeof Inventory>;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}

import { ManyToMany, column, manyToMany } from "@ioc:Adonis/Lucid/Orm";
import { DateTime } from "luxon";
import UuidBase from "./Base/UuidBase";
import Inventory from "./Inventory";

export default class Location extends UuidBase {
  @column()
  public room: string;

  @column()
  public floor: number;

  @column()
  public block: string;

  @column()
  public description: string;

  @manyToMany(() => Inventory, {
    pivotTable: "inventory_locations",
    pivotColumns: ["is_location"],
    pivotTimestamps: true,
  })
  public inventories: ManyToMany<typeof Inventory>;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}

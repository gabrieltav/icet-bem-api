import { ManyToMany, column, manyToMany } from "@ioc:Adonis/Lucid/Orm";
import { InventoryState } from "App/Services/Utils/Enums";
import { DateTime } from "luxon";
import UuidBase from "./Base/UuidBase";
import Location from "./Location";

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
  public value: number;

  @column()
  public term: string;

  @manyToMany(() => Location, {
    pivotTable: "inventory_locations",
    pivotColumns: ["is_location"],
    pivotTimestamps: true,
  })
  public locations: ManyToMany<typeof Location>;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}

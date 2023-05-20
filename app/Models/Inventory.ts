import {
  BaseModel,
  ManyToMany,
  column,
  manyToMany,
} from "@ioc:Adonis/Lucid/Orm";
import { InventoryState } from "App/Services/Utils/Enums";
import { DateTime } from "luxon";
import Location from "./Location";

export default class Inventory extends BaseModel {
  @column({ isPrimary: true })
  public id: string;

  @column()
  public item: string;

  @column()
  public description: string;

  @column()
  public patrimony: string;

  @column()
  public qrcode: string;

  @column()
  public state: InventoryState;

  @column.date()
  public dateOfAcquisition: DateTime;

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

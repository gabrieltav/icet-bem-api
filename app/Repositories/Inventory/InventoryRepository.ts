import { ModelPaginatorContract } from "@ioc:Adonis/Lucid/Orm";
import InventoryDto, {
  DataInventory,
  FilterInventory,
  PaginatedInventory,
} from "App/Dtos/InventoryDto";
import LocationDto from "App/Dtos/locationDto";
import Inventory from "App/Models/Inventory";
import IInventoryRepository from "./IInventoryRepository";

export default class InventoryRepository implements IInventoryRepository {
  public async create(inventoryDto: InventoryDto): Promise<Inventory> {
    return await Inventory.create(inventoryDto);
  }

  public async show(id: string): Promise<Inventory> {
    const inventory = await Inventory.findOrFail(id);
    await inventory.load("location");
    return inventory;
  }

  public async index(filter: FilterInventory): Promise<PaginatedInventory> {
    const inventorys: ModelPaginatorContract<Inventory> =
      await Inventory.query()
        .select("inventories.*")
        .preload("location")
        .if(filter.search, (query) => {
          query.where("name", "ilike", `%${filter.search}%`);
          query.orWhere("asset_tag", "ilike", `%${filter.search}%`);
        })
        .paginate(filter.page, filter.limit);

    const data = await this.dataInventory(inventorys);

    const result: PaginatedInventory = {
      ...inventorys.toJSON().meta,
      data: data,
    };

    return result;
  }

  public async update(
    id: string,
    partialInventory: Partial<InventoryDto>,
    partialLocation: Partial<LocationDto>
  ): Promise<void> {
    const inventory = await Inventory.findOrFail(id);
    await inventory.load("location");
    inventory.merge(partialInventory);
    const location = inventory.location.merge(partialLocation);
    await inventory.save();
    await location.save();
  }

  public async delete(id: string): Promise<void> {
    await Inventory.query().where("id", id).delete();
  }

  private async dataInventory(
    inventories: ModelPaginatorContract<Inventory>
  ): Promise<DataInventory[]> {
    return inventories.toJSON().data.map(
      (inventory) =>
        ({
          id: inventory.id,
          name: inventory.name,
          description: inventory.description,
          assetTag: inventory.assetTag,
          qrcode: inventory.qrcode,
          state: inventory.state,
          date: inventory.date.toFormat("dd-MM-yyyy"),
          value: inventory.value,
          term: inventory.term,
        } as DataInventory)
    );
  }
}

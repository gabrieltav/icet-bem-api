import { ModelPaginatorContract } from "@ioc:Adonis/Lucid/Orm";
import InventoryDto, {
  DataInventory,
  FilterInventory,
  PaginatedInventory,
} from "App/Dtos/InventoryDto";
import Inventory from "App/Models/Inventory";
import IInventoryRepository from "./IInventoryRepository";

export default class InventoryRepository implements IInventoryRepository {
  public async create(inventoryDto: InventoryDto): Promise<Inventory> {
    return await Inventory.create(inventoryDto);
  }

  public async show(id: string): Promise<DataInventory> {
    const inventory = await Inventory.query()
      .where("id", id)
      .preload("locations", (locationQuery) => {
        locationQuery.where("is_location", true);
      })
      .firstOrFail();

    return {
      id: inventory.id,
      description: inventory.description,
      patrimony: inventory.patrimony,
      qrcode: inventory.qrcode,
      state: inventory.state,
      dateOfAcquisition: inventory.dateOfAcquisition,
      value: inventory.value,
      term: inventory.term,
      locationRoom: inventory.locations[0]?.room || "",
      locationFloor: inventory.locations[0]?.floor || 0,
      locationBlock: inventory.locations[0]?.block || "",
      locationDescription: inventory.locations[0]?.description || "",
    };
  }

  public async index(filter: FilterInventory): Promise<PaginatedInventory> {
    const inventorys: ModelPaginatorContract<Inventory> =
      await Inventory.query()
        .select("inventories.*")
        .preload("locations")
        .if(filter.search, (query) => {
          query.where("description", "ilike", `%${filter.search}%`);
          query.orWhere("item", "ilike", `%${filter.search}%`);
        })
        .orderBy("created_at", "desc")
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
    partialInventory: Partial<InventoryDto>
  ): Promise<void> {
    const inventory = await Inventory.findOrFail(id);
    inventory.merge(partialInventory);
    await inventory.save();
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
          description: inventory.description,
          patrimony: inventory.patrimony,
          qrcode: inventory.qrcode,
          state: inventory.state,
          dateOfAcquisition: inventory.dateOfAcquisition.toFormat("dd-MM-yyyy"),
          value: inventory.value,
          term: inventory.term,
        } as DataInventory)
    );
  }
}

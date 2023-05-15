import Database from "@ioc:Adonis/Lucid/Database";
import InventoryDto, {
  DataInventory,
  FilterInventory,
  PaginatedInventory,
} from "App/Dtos/InventoryDto";
import Inventory from "App/Models/Inventory";
import IInventoryRepository from "App/Repositories/Inventory/IInventoryRepository";
import { ErrorMessages } from "../Utils/ErrorConstants";

export default class InventoryService {
  constructor(private readonly inventoryRepository: IInventoryRepository) {}

  public async create(
    inventoryDto: InventoryDto,
    locationId: string
  ): Promise<Inventory> {
    const inventory = await this.inventoryRepository.create(inventoryDto);

    try {
      await inventory.related("locations").attach([locationId]);
      return inventory;
    } catch (error) {
      await this.inventoryRepository.delete(inventory.id);
      throw new Error(ErrorMessages.INVENTORY_NOT_CREATED);
    }
  }

  public async show(id: string): Promise<DataInventory> {
    return await this.inventoryRepository.show(id);
  }

  public async index(filter: FilterInventory): Promise<PaginatedInventory> {
    return await this.inventoryRepository.index(filter);
  }

  public async update(
    inventoryId: string,
    inventoryPartial: Partial<InventoryDto>,
    locationId?: string
  ): Promise<void> {
    const inventory = await Inventory.findOrFail(inventoryId);
    await inventory.load("locations");

    if (inventory.locations && inventory.locations.length > 0) {
      await this.checkAllLocations(inventory.id, locationId);
    }

    await this.inventoryRepository.update(inventory.id, inventoryPartial);
    if (locationId) {
      await inventory.related("locations").attach([locationId]);
    }
  }

  public async delete(id: string): Promise<void> {
    return await this.inventoryRepository.delete(id);
  }

  public async checkAllLocations(
    inventoryId: string,
    locationId?: string
  ): Promise<void> {
    const inventory = await this.inventoryRepository.show(inventoryId);
    const currentLocation = await Database.from("inventory_locations")
      .where("inventory_id", inventory.id)
      .andWhere("is_location", true)
      .first();

    if (locationId && locationId !== currentLocation.location_id) {
      await Database.from("inventory_locations")
        .where("inventory_id", inventory.id)
        .andWhere("location_id", currentLocation.location_id)
        .update("is_location", false);
    }
  }
}

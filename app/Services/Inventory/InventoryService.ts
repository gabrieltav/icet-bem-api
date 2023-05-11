import InventoryDto, {
  FilterInventory,
  PaginatedInventory,
} from "App/Dtos/InventoryDto";
import LocationDto from "App/Dtos/locationDto";
import Inventory from "App/Models/Inventory";
import IInventoryRepository from "App/Repositories/Inventory/IInventoryRepository";
import { ErrorMessages } from "../Utils/ErrorConstants";

export default class InventoryService {
  constructor(private readonly inventoryRepository: IInventoryRepository) {}

  public async create(
    inventoryDto: InventoryDto,
    locationDto: LocationDto
  ): Promise<Inventory> {
    const inventory = await this.inventoryRepository.create(inventoryDto);

    try {
      await inventory.related("location").create({
        inventoryId: inventory.id,
        ...locationDto,
      });

      return inventory;
    } catch (error) {
      await this.inventoryRepository.delete(inventory.id);
      throw new Error(ErrorMessages.INVENTORY_NOT_CREATED);
    }
  }

  public async show(id: string): Promise<Inventory> {
    return await this.inventoryRepository.show(id);
  }

  public async index(filter: FilterInventory): Promise<PaginatedInventory> {
    return await this.inventoryRepository.index(filter);
  }

  public async update(
    id: string,
    inventoryPartial: Partial<InventoryDto>,
    partialLocation: Partial<LocationDto>
  ): Promise<void> {
    return await this.inventoryRepository.update(
      id,
      inventoryPartial,
      partialLocation
    );
  }

  public async delete(id: string): Promise<void> {
    return await this.inventoryRepository.delete(id);
  }
}

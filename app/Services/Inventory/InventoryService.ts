import InventoryDto, {
  FilterInventory,
  PaginatedInventory,
} from "App/Dtos/InventoryDto";
import Inventory from "App/Models/Inventory";
import IInventoryRepository from "App/Repositories/Inventory/IInventoryRepository";

export default class InventoryService {
  constructor(private readonly inventoryRepository: IInventoryRepository) {}

  public async create(inventoryDto: InventoryDto): Promise<Inventory> {
    return await this.inventoryRepository.create(inventoryDto);
  }

  public async show(id: string): Promise<Inventory> {
    return await this.inventoryRepository.show(id);
  }

  public async index(filter: FilterInventory): Promise<PaginatedInventory> {
    return await this.inventoryRepository.index(filter);
  }

  public async update(
    id: string,
    inventoryPartial: Partial<InventoryDto>
  ): Promise<void> {
    return await this.inventoryRepository.update(id, inventoryPartial);
  }

  public async delete(id: string): Promise<void> {
    return await this.inventoryRepository.delete(id);
  }
}

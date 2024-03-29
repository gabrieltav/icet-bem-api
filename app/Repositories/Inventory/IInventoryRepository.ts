import InventoryDto, {
  DataInventory,
  FilterInventory,
  PaginatedInventory,
} from "App/Dtos/InventoryDto";
import Inventory from "App/Models/Inventory";

export default interface IInventoryRepository {
  create: (inventoryDto: InventoryDto) => Promise<Inventory>;
  show: (id: string) => Promise<DataInventory>;
  index: (filter: FilterInventory) => Promise<PaginatedInventory>;
  update: (
    id: string,
    partialInventory: Partial<InventoryDto>
  ) => Promise<void>;
  delete: (id: string) => Promise<void>;
}

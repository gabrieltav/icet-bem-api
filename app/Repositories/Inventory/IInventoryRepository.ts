import InventoryDto, {
  FilterInventory,
  PaginatedInventory,
} from "App/Dtos/InventoryDto";
import LocationDto from "App/Dtos/locationDto";
import Inventory from "App/Models/Inventory";

export default interface IInventoryRepository {
  create: (inventoryDto: InventoryDto) => Promise<Inventory>;
  show: (id: string) => Promise<Inventory>;
  index: (filter: FilterInventory) => Promise<PaginatedInventory>;
  update: (
    id: string,
    partialInventory: Partial<InventoryDto>,
    partialLocation: Partial<LocationDto>
  ) => Promise<void>;
  delete: (id: string) => Promise<void>;
}

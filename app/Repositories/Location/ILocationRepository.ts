import { FilterLocation, InventoryLocationDto } from "App/Dtos/InventoryDto";
import Location from "App/Models/Location";

export default interface ILocationRepository {
  index: (filter: FilterLocation) => Promise<Location[]>;
  locationHistory: (inventoryId: string) => Promise<InventoryLocationDto[]>;
}

import { FilterLocation, InventoryLocationDto } from "App/Dtos/InventoryDto";
import LocationDto from "App/Dtos/LocationDto";

export default interface ILocationRepository {
  index: (filter: FilterLocation) => Promise<LocationDto[]>;
  locationHistory: (inventoryId: string) => Promise<InventoryLocationDto[]>;
}

import { FilterLocation, ListHistory } from "App/Dtos/InventoryDto";
import LocationDto from "App/Dtos/LocationDto";
import { Query } from "App/Dtos/Query";

export default interface ILocationRepository {
  index: (filter: FilterLocation) => Promise<LocationDto[]>;
  locationHistory: (inventoryId: string, query: Query) => Promise<ListHistory>;
}

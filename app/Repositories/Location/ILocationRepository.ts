import { FilterLocation } from "App/Dtos/InventoryDto";
import Location from "App/Models/Location";

export default interface ILocationRepository {
  index: (filter: FilterLocation) => Promise<Location[]>;
}

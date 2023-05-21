import { FilterLocation, InventoryLocationDto } from "App/Dtos/InventoryDto";
import Location from "App/Models/Location";
import ILocationRepository from "App/Repositories/Location/ILocationRepository";

export default class LocationService {
  constructor(private readonly locationRepository: ILocationRepository) {}

  public async index(filter: FilterLocation): Promise<Location[]> {
    return await this.locationRepository.index(filter);
  }

  public async locationHistory(
    inventoryId: string
  ): Promise<InventoryLocationDto[]> {
    return await this.locationRepository.locationHistory(inventoryId);
  }
}

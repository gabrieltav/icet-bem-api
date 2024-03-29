import { FilterLocation, ListHistory } from "App/Dtos/InventoryDto";
import LocationDto from "App/Dtos/LocationDto";
import { Query } from "App/Dtos/Query";
import ILocationRepository from "App/Repositories/Location/ILocationRepository";

export default class LocationService {
  constructor(private readonly locationRepository: ILocationRepository) {}

  public async index(filter: FilterLocation): Promise<LocationDto[]> {
    return await this.locationRepository.index(filter);
  }

  public async locationHistory(
    inventoryId: string,
    query: Query
  ): Promise<ListHistory> {
    return await this.locationRepository.locationHistory(inventoryId, query);
  }
}

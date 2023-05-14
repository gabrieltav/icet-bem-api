import { FilterLocation } from "App/Dtos/InventoryDto";
import Location from "App/Models/Location";
import ILocationRepository from "./ILocationRepository";

export default class LocationRepository implements ILocationRepository {
  public async index(filter: FilterLocation): Promise<Location[]> {
    return await Location.query()
      .select("locations.*")
      .if(filter.room, (query) => {
        query.where("room", "ilike", `%${filter.room}%`);
      })
      .if(filter.floor, (query) => {
        query.where("floor", filter.floor as number);
      })
      .if(filter.block, (query) => {
        query.where("block", "ilike", `%${filter.block}%`);
      })
      .if(filter.description, (query) => {
        query.where("description", "ilike", `%${filter.description}%`);
      })
      .limit(10)
      .offset(0);
  }
}

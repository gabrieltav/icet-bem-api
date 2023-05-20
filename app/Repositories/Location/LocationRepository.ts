import { FilterLocation } from "App/Dtos/InventoryDto";
import Location from "App/Models/Location";
import ILocationRepository from "./ILocationRepository";

export default class LocationRepository implements ILocationRepository {
  public async index(filter: FilterLocation): Promise<Location[]> {
    return await Location.query()
      .select("locations.*")
      .if(filter.search, (query) => {
        query.where("room", "ilike", `%${filter.search}%`);
        query.orWhere("block", "ilike", `%${filter.search}%`);
        query.orWhere("description", "ilike", `%${filter.search}%`);
      })
      .orderBy("created_at", "desc")
      .limit(10)
      .offset(0);
  }
}

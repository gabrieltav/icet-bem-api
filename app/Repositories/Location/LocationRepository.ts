import Database from "@ioc:Adonis/Lucid/Database";
import { FilterLocation, InventoryLocationDto } from "App/Dtos/InventoryDto";
import LocationDto from "App/Dtos/LocationDto";
import LocationFormatter from "App/Formatters/Location/LocationFormatter";
import Location from "App/Models/Location";
import ILocationRepository from "./ILocationRepository";

export default class LocationRepository implements ILocationRepository {
  public async index(filter: FilterLocation): Promise<LocationDto[]> {
    const locations = await Location.query()
      .select("locations.*")
      .if(filter.search, (query) => {
        query.where("room", "ilike", `%${filter.search}%`);
        query.orWhere("block", "ilike", `%${filter.search}%`);
        query.orWhere("description", "ilike", `%${filter.search}%`);
      })
      .orderBy("created_at", "desc")
      .limit(10)
      .offset(0);

    const formattedLocations = LocationFormatter.formatLocation(locations);
    return formattedLocations;
  }

  public async locationHistory(
    inventoryId: string
  ): Promise<InventoryLocationDto[]> {
    const locations = await Database.from("inventory_locations")
      .join("locations", "inventory_locations.location_id", "=", "locations.id")
      .join(
        "inventories",
        "inventory_locations.inventory_id",
        "=",
        "inventories.id"
      )
      .where("inventory_id", inventoryId)
      .orderBy("is_location", "desc");

    const activeLocation = locations.find((location) => location.is_location);
    if (activeLocation) {
      const activeLocationIndex = locations.indexOf(activeLocation);
      if (activeLocationIndex !== -1) {
        locations.splice(activeLocationIndex, 1);
        locations.unshift(activeLocation);
      }
    }

    const formattedLocations = await this.formatLocationData(locations);
    return formattedLocations;
  }

  private async formatLocationData(
    locations: any[]
  ): Promise<InventoryLocationDto[]> {
    const formattedLocations: InventoryLocationDto[] = [];

    for (const location of locations) {
      const formattedLocation: InventoryLocationDto = {
        inventoryId: location.inventory_id,
        locationId: location.location_id,
        isLocation: location.is_location,
        createdAt: location.updated_at,
        updatedAt: location.updated_at,
        room: location.room,
        floor: location.floor,
        block: location.block,
        description: location.description,
        item: location.item,
        patrimony: location.patrimony,
        state: location.state,
        qrcode: location.qrcode,
        dateOfAcquisition: location.date_of_acquisition,
        value: location.value,
        term: location.term,
      };

      formattedLocations.push(formattedLocation);
    }

    return formattedLocations;
  }
}

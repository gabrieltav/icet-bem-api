import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

import ILocationRepository from "App/Repositories/Location/ILocationRepository";
import LocationRepository from "App/Repositories/Location/LocationRepository";
import LocationService from "App/Services/Location/LocationService";

export default class AdminLocationsController {
  private locationService: LocationService;
  private locationRepository: ILocationRepository;

  constructor() {
    this.locationRepository = new LocationRepository();
    this.locationService = new LocationService(this.locationRepository);
  }

  public async index({ request, response }: HttpContextContract) {
    const { search } = request.qs();
    const inventaries = await this.locationService.index({
      search: search ?? null,
    });
    return response.ok(inventaries);
  }

  public async locationHistory({ params, response }: HttpContextContract) {
    const { inventoryId } = params;
    const inventory = await this.locationService.locationHistory(inventoryId);
    return response.ok(inventory);
  }
}

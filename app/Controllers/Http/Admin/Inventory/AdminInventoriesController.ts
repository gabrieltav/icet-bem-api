import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

import IInventoryRepository from "App/Repositories/Inventory/IInventoryRepository";
import InventoryRepository from "App/Repositories/Inventory/InventoryRepository";
import InventoryService from "App/Services/Inventory/InventoryService";
import CreateInventoryValidator from "App/Validators/Inventory/CreateInventoryValidator";
import UpdateInventoryValidator from "App/Validators/Inventory/UpdateInventoryValidator";

export default class AdminInventoriesController {
  private inventoryService: InventoryService;
  private inventoryRepository: IInventoryRepository;

  constructor() {
    this.inventoryRepository = new InventoryRepository();
    this.inventoryService = new InventoryService(this.inventoryRepository);
  }

  public async create({ request, response }: HttpContextContract) {
    const inventoryDto = await request.validate(CreateInventoryValidator);
    await this.inventoryService.create(inventoryDto);
    return response.created();
  }

  public async index({ request, response }: HttpContextContract) {
    const { page = 1, limit = 8, search } = request.qs();
    const inventaries = await this.inventoryService.index({
      search: search,
      page: page,
      limit: limit,
    });
    return response.ok(inventaries);
  }

  public async show({ params, response }: HttpContextContract) {
    const { inventoryId } = params;
    const inventory = await this.inventoryService.show(inventoryId);
    return response.ok(inventory);
  }

  public async update({
    params,
    request,
    response,
  }: HttpContextContract): Promise<void> {
    const { inventoryId } = params;
    const inventory = await this.inventoryService.show(inventoryId);
    const inventoryDto = await request.validate(UpdateInventoryValidator);
    await this.inventoryService.update(inventory.id, inventoryDto);
    return response.noContent();
  }

  public async delete({ params, response }: HttpContextContract) {
    const { inventoryId } = params;
    const inventory = await this.inventoryService.show(inventoryId);
    await this.inventoryService.delete(inventory.id);
    return response.noContent();
  }
}

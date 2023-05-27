import { InventoryState } from "App/Services/Utils/Enums";
import { DateTime } from "luxon";

export default interface InventoryDto {
  description: string;
  item: string;
  patrimony: string;
  dateOfAcquisition: DateTime;
  state: InventoryState;
  value: number;
  term?: string;
}

export interface InventoryLocationDto {
  inventoryId: string;
  locationId: string;
  isLocation: boolean;
  createdAt: DateTime;
  updatedAt: DateTime;
  room: string;
  floor: number;
  block: string;
  description: string;
  item: string;
  patrimony: string;
  state: InventoryState;
  qrcode: string | null;
  dateOfAcquisition: string;
  value: number;
  term: string | null;
}

export interface FilterInventory {
  search?: string | null;
  page: number;
  limit?: number;
}

export interface FilterLocation {
  search?: string | null;
}

export interface DataInventory {
  id: string;
  description?: string;
  patrimony: string;
  qrcode?: string;
  state: InventoryState;
  dateOfAcquisition?: DateTime;
  value: number;
  term: string;
  location: string;
}

export interface PaginatedInventory {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
  first_page: number;
  first_page_url: string;
  last_page_url: string;
  next_page_url: string | null;
  previous_page_url: string | null;
  data: DataInventory[];
}

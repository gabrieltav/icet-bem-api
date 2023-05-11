import { InventoryState } from "App/Services/Utils/Enums";
import { DateTime } from "luxon";

export default interface InventoryDto {
  name: string;
  description?: string;
  assetTag: string;
  qrcode?: string;
  state: InventoryState;
  date: DateTime;
  value: string;
  term?: string;
}

export interface InventoryLocationDto {
  inventoryId: string;
  room_number: string;
  floor: string;
  block: string;
  building: string;
  department?: string;
}

export interface FilterInventory {
  search?: string | null;
  page: number;
  limit?: number;
}

export interface DataInventory {
  id: string;
  name: string;
  description?: string;
  assetTag: string;
  qrcode?: string;
  state: InventoryState;
  date?: Date;
  value: string;
  term: string;
  roomNumber: string;
  floor: string;
  block: string;
  building: string;
  department: string;
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

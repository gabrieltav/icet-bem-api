import { DataInventory } from "App/Dtos/InventoryDto";
import Inventory from "App/Models/Inventory";
import Location from "App/Models/Location";

export default class InventoryFormatter {
  public static formatInventory(
    inventory: Inventory,
    location: Location
  ): DataInventory {
    const {
      id,
      description,
      patrimony,
      qrcode,
      state,
      dateOfAcquisition,
      value,
      term,
    } = inventory;
    const locationDescription = location ? location.description : "";
    const locationRoom = location ? location.room : "";
    const locationFloor = location ? location.floor : 0;
    const locationBlock = location ? location.block : "";

    const formattedLocation = `${
      locationDescription ? `${locationDescription} -` : ""
    }${
      locationRoom ? ` ${locationRoom} -` : ""
    } PISO ${locationFloor} - BLOCO ${locationBlock}`;

    return {
      id,
      description,
      patrimony,
      qrcode,
      state,
      dateOfAcquisition,
      value,
      term,
      location: formattedLocation,
    };
  }
}

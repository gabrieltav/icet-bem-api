import Database from "@ioc:Adonis/Lucid/Database";
import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Inventory from "App/Models/Inventory";
import Location from "App/Models/Location";
import { InventoryState } from "App/Services/Utils/Enums";
import { DateTime } from "luxon";

export function generateRandomDate(): DateTime {
  const start = DateTime.fromObject({ year: 2008, month: 1, day: 1 });
  const end = DateTime.now();

  const randomTimestamp = start.plus({
    milliseconds: Math.random() * (end.toMillis() - start.toMillis()),
  });
  return randomTimestamp;
}

export default class extends BaseSeeder {
  public async run() {
    const uniqueId = "id";

    const locations = await Location.all();

    const inventories = await Inventory.fetchOrCreateMany(uniqueId, [
      {
        id: "04d63d90-1b0e-4c9c-9f92-f0d38fe5d406",
        item: "1004",
        description:
          "CADEIRA GIRATÓRIA TIPO SECRETÁRIA, CORES AZUL, VERDE E PRETA, MARCA ANCEZKI, MODELO 1019 - SEM BRAÇOS",
        patrimony: "85501",
        state: InventoryState.GOOD,
        dateOfAcquisition: generateRandomDate(),
        value: 84.0,
        term: "000115/2008",
      },
      {
        id: "730369fa-bdde-41f1-8aef-52514f175f97",
        item: "1005",
        description:
          "CADEIRA GIRATÓRIA TIPO SECRETÁRIA, CORES AZUL, VERDE E PRETA, MARCA ANCEZKI, MODELO 1019 - SEM BRAÇOS",
        patrimony: "85502",
        state: InventoryState.GOOD,
        dateOfAcquisition: generateRandomDate(),
        value: 84.0,
        term: "000115/2008",
      },
      {
        id: "0425f91d-1f57-4f41-acaf-e99c4e787ea8",
        item: "1006",
        description:
          "CADEIRA GIRATÓRIA TIPO SECRETÁRIA, CORES AZUL, VERDE E PRETA, MARCA ANCEZKI, MODELO 1019 - SEM BRAÇOS",
        patrimony: "85503",
        state: InventoryState.GOOD,
        dateOfAcquisition: generateRandomDate(),
        value: 84.0,
        term: "000115/2008",
      },
      {
        id: "de52fcbc-d6fe-439e-ba29-94752eac2fd0",
        item: "1007",
        description:
          "CADEIRA GIRATÓRIA TIPO SECRETÁRIA, CORES AZUL, VERDE E PRETA, MARCA ANCEZKI, MODELO 1019 - SEM BRAÇOS",
        patrimony: "85504",
        state: InventoryState.UNSERVABLE,
        dateOfAcquisition: generateRandomDate(),
        value: 84.0,
        term: "000115/2008",
      },
      {
        id: "a7da4b7d-a0d3-40ce-9121-602e65882bd3",
        item: "1008",
        description:
          "CADEIRA GIRATÓRIA TIPO SECRETÁRIA, CORES AZUL, VERDE E PRETA, MARCA ANCEZKI, MODELO 1019 - SEM BRAÇOS",
        patrimony: "85505",
        state: InventoryState.UNSERVABLE,
        dateOfAcquisition: generateRandomDate(),
        value: 84.0,
        term: "000115/2008",
      },
      {
        id: "b91372d5-141e-49e6-a24c-60af3c2080f0",
        item: "1025",
        description:
          "CADEIRA GIRATÓRIA TIPO SECRETÁRIA, CORES AZUL, VERDE E PRETA, MARCA ABC, MODELO 2020 - COM BRAÇOS",
        patrimony: "85520",
        state: InventoryState.UNSERVABLE,
        dateOfAcquisition: generateRandomDate(),
        value: 95.5,
        term: "000116/2008",
      },
      {
        id: "2a779722-2b56-4786-b23f-8645ccb056fe",
        item: "1026",
        description:
          "CADEIRA GIRATÓRIA TIPO SECRETÁRIA, CORES VERMELHA E PRETA, MARCA XYZ, MODELO 3030 - SEM BRAÇOS",
        patrimony: "85521",
        state: InventoryState.GOOD,
        dateOfAcquisition: generateRandomDate(),
        value: 72.0,
        term: "000117/2008",
      },
      {
        id: "43bc3c7b-103b-403a-a503-d6cbfa8b2174",
        item: "1027",
        description:
          "MESA DE MADEIRA RETANGULAR, COR MARROM, TAMANHO 120X80 CM",
        patrimony: "85520",
        state: InventoryState.UNSERVABLE,
        dateOfAcquisition: generateRandomDate(),
        value: 95.5,
        term: "000116/2008",
      },
      {
        id: "e33dac0e-00eb-466a-82b2-e1c9576b3bd0",
        item: "1028",
        description: "IMPRESSORA LASER COLORIDA, MARCA XYZ, MODELO 5000",
        patrimony: "85521",
        state: InventoryState.GOOD,
        dateOfAcquisition: generateRandomDate(),
        value: 72.0,
        term: "000117/2008",
      },
      {
        id: "aa38e210-f5d4-4589-b6fb-55fc1de6b164",
        item: "1029",
        description: "NOTEBOOK HP, CORE I5, 8GB DE RAM, 256GB SSD",
        patrimony: "85522",
        state: InventoryState.GOOD,
        dateOfAcquisition: generateRandomDate(),
        value: 1200.0,
        term: "000118/2008",
      },
      {
        id: "d6631601-27c0-482f-823a-92cb40a956eb",
        item: "1030",
        description: "CADEIRA DE RODAS MOTORIZADA, MARCA ABC, MODELO 6000",
        patrimony: "85523",
        state: InventoryState.GOOD,
        dateOfAcquisition: generateRandomDate(),
        value: 2500.0,
        term: "000119/2008",
      },
      {
        id: "738ae102-ecd9-4c1f-9ba9-a659a699b82d",
        item: "1031",
        description: "TELEVISÃO LED 55 POLEGADAS, MARCA XYZ, SMART TV",
        patrimony: "85524",
        state: InventoryState.GOOD,
        dateOfAcquisition: generateRandomDate(),
        value: 850.0,
        term: "000120/2008",
      },
      {
        id: "989b988d-ee39-4753-ba5b-4a2df0771e48",
        item: "1032",
        description: "IMPRESSORA MULTIFUNCIONAL, MARCA ABC, MODELO 8000",
        patrimony: "85526",
        state: InventoryState.GOOD,
        dateOfAcquisition: generateRandomDate(),
        value: 350.0,
        term: "000121/2008",
      },
      {
        id: "45a5aa49-48eb-4570-abaa-4b343bba4d0e",
        item: "1033",
        description: "NOTEBOOK LENOVO, CORE I7, 16GB DE RAM, 512GB SSD",
        patrimony: "85527",
        state: InventoryState.GOOD,
        dateOfAcquisition: generateRandomDate(),
        value: 1600.0,
        term: "000122/2008",
      },
      {
        id: "0465a5e0-ca47-472f-92f2-95397e1d7d9f",
        item: "1034",
        description: "MONITOR LED 24 POLEGADAS, MARCA XYZ",
        patrimony: "85528",
        state: InventoryState.GOOD,
        dateOfAcquisition: generateRandomDate(),
        value: 200.0,
        term: "000123/2008",
      },
      {
        id: "54857faf-5eb5-490f-99cd-dbb861448d6c",
        item: "1035",
        description: "AR CONDICIONADO 18000 BTUS, MARCA ABC, MODELO 9000",
        patrimony: "85529",
        state: InventoryState.GOOD,
        dateOfAcquisition: generateRandomDate(),
        value: 1500.0,
        term: "000124/2008",
      },
      {
        id: "aff8c42a-97eb-465e-b034-420421d2fc27",
        item: "1036",
        description: "GELADEIRA FROST FREE, MARCA XYZ, CAPACIDADE 400L",
        patrimony: "85530",
        state: InventoryState.GOOD,
        dateOfAcquisition: generateRandomDate(),
        value: 1200.0,
        term: "000125/2008",
      },
      {
        id: "51ce30c9-3b6b-4378-9403-c21e1727c84d",
        item: "1037",
        description: "SOFÁ DE 3 LUGARES, COR CINZA, ESTILO MODERNO",
        patrimony: "85532",
        state: InventoryState.GOOD,
        dateOfAcquisition: generateRandomDate(),
        value: 800.0,
        term: "000126/2008",
      },
      {
        id: "8f796507-8335-483e-aff9-a0b43240dbce",
        item: "1038",
        description: "MÁQUINA DE LAVAR ROUPAS, MARCA ABC, CAPACIDADE 10KG",
        patrimony: "85533",
        state: InventoryState.GOOD,
        dateOfAcquisition: generateRandomDate(),
        value: 600.0,
        term: "000127/2008",
      },
      {
        id: "11ed6771-1ad7-4b9b-98fb-b13f38e2141b",
        item: "1039",
        description: "CADEIRA DE ESCRITÓRIO, GIRATÓRIA, COR PRETA",
        patrimony: "85535",
        state: InventoryState.GOOD,
        dateOfAcquisition: generateRandomDate(),
        value: 100.0,
        term: "000128/2008",
      },
      {
        id: "6b79c4b3-ad6a-4139-b9ef-2251fd2511e1",
        item: "1040",
        description: "CAMA DE CASAL, MADEIRA MACIÇA, TAMANHO KING",
        patrimony: "85536",
        state: InventoryState.GOOD,
        dateOfAcquisition: generateRandomDate(),
        value: 1500.0,
        term: "000129/2008",
      },
      {
        id: "c379ce6f-ac13-4ed7-a4bb-c2a29c2f416b",
        item: "1041",
        description: "MESA DE JANTAR, VIDRO TEMPERADO, 6 CADEIRAS",
        patrimony: "85537",
        state: InventoryState.GOOD,
        dateOfAcquisition: generateRandomDate(),
        value: 900.0,
        term: "000130/2008",
      },
    ]);

    await Database.from("inventory_locations").delete();

    await Promise.all(
      inventories.map(async (inventory) => {
        const randomLocation =
          locations[Math.floor(Math.random() * locations.length)];

        const existingLocation = await inventory
          .related("locations")
          .query()
          .wherePivot("location_id", randomLocation.id)
          .wherePivot("inventory_id", inventory.id)
          .first();

        if (!existingLocation) {
          const inventoryLocationExists = await Database.transaction(
            async (trx) => {
              const existingInventoryLocation = await trx
                .from("inventory_locations")
                .where("inventory_id", inventory.id)
                .where("location_id", randomLocation.id)
                .first();

              if (!existingInventoryLocation) {
                await trx.table("inventory_locations").insert({
                  inventory_id: inventory.id,
                  location_id: randomLocation.id,
                });
              }

              return existingInventoryLocation !== undefined;
            }
          );

          if (!inventoryLocationExists) {
            await inventory.related("locations").attach([randomLocation.id]);
          }
        }

        return inventory;
      })
    );
  }
}

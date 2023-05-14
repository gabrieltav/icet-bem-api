import Env from "@ioc:Adonis/Core/Env";
import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "inventory_locations";

  public async up() {
    if (Env.get("NODE_ENV") !== "test") {
      this.schema.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    }

    this.schema.createTable(this.tableName, (table) => {
      if (Env.get("NODE_ENV") !== "test") {
        table.uuid("id").primary().defaultTo(this.raw("uuid_generate_v4()"));
      } else {
        table.increments("id").primary();
      }

      table.uuid("inventory_id").references("id").inTable("inventories");
      table.uuid("location_id").references("id").inTable("locations");
      table.boolean("is_location").defaultTo(true).notNullable();

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp("created_at", { useTz: true });
      table.timestamp("updated_at", { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}

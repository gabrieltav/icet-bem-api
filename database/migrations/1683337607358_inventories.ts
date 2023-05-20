import Env from "@ioc:Adonis/Core/Env";
import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "inventories";

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
      table.string("item").nullable();
      table.string("description").nullable();
      table.string("patrimony").nullable();
      table.string("state").nullable();
      table.string("qrcode").nullable();
      table.date("date_of_acquisition").nullable();
      table.decimal("value", 10, 2).nullable();
      table.string("term").nullable();

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

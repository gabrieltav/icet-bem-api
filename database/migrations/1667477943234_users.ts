import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "users";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid("id").primary();
      table.string("name").notNullable();
      table.string("email", 255).notNullable().unique();
      table.string("password", 180).notNullable();
      table.boolean("status").notNullable().defaultTo(false);
      table.string("avatar").nullable();
      table.string("cpf").nullable().unique();
      table.string("phone", 15).nullable();
      table.string("sector").nullable();
      table.string("role").notNullable();

      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp("created_at", { useTz: true }).notNullable();
      table.timestamp("updated_at", { useTz: true }).notNullable();
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}

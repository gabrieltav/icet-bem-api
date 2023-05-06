import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import User from "App/Models/User";
import { Roles } from "App/Services/Utils/Enums";

export default class extends BaseSeeder {
  public async run() {
    const email = "adm@icetbem.com.br";

    const existingUser = await User.findBy("email", email);
    if (existingUser) {
      return;
    }

    await User.create({
      name: "Administrador Icet Bem",
      password: "adminteste123",
      email: email,
      role: Roles.ADMIN,
    });
  }
}

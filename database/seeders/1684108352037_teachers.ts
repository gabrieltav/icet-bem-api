import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Teacher from "App/Models/Teacher";
import { Gender } from "App/Services/Utils/Enums";
import { generateRandomDate } from "./1683337607358_inventories";

export default class extends BaseSeeder {
  public async run() {
    const uniqueEmail = "email";

    await Teacher.fetchOrCreateMany(uniqueEmail, [
      {
        name: "Gabriel Tavares",
        matriculation: "21855478",
        email: "gabriel@gmail.com",
        phone: "92992019608",
        gender: Gender.MALE,
        department: "professores",
        birthDate: generateRandomDate(),
        hireDate: generateRandomDate(),
      },
      {
        name: "Mariana Barbosa",
        matriculation: "22349876",
        email: "mariana.barbosa@gmail.com",
        phone: "92992019611",
        gender: Gender.FEMALE,
        department: "professores",
        birthDate: generateRandomDate(),
        hireDate: generateRandomDate(),
      },
      {
        name: "Lucas Santos",
        matriculation: "21855479",
        email: "lucas.santos@gmail.com",
        phone: "92992019612",
        gender: Gender.MALE,
        department: "professores",
        birthDate: generateRandomDate(),
        hireDate: generateRandomDate(),
      },
      {
        name: "Isabella Silva",
        matriculation: "22349877",
        email: "isabella.silva@gmail.com",
        phone: "92992019613",
        gender: Gender.FEMALE,
        department: "professores",
        birthDate: generateRandomDate(),
        hireDate: generateRandomDate(),
      },
      {
        name: "Pedro Oliveira",
        matriculation: "21855480",
        email: "pedro.oliveira@gmail.com",
        phone: "92992019614",
        gender: Gender.MALE,
        department: "professores",
        birthDate: generateRandomDate(),
        hireDate: generateRandomDate(),
      },
      {
        name: "Larissa Barbosa",
        matriculation: "22349878",
        email: "larissa.barbosa@gmail.com",
        phone: "92992019615",
        gender: Gender.FEMALE,
        department: "professores",
        birthDate: generateRandomDate(),
        hireDate: generateRandomDate(),
      },
      {
        name: "Gustavo Silva",
        matriculation: "21855481",
        email: "gustavo.silva@gmail.com",
        phone: "92992019616",
        gender: Gender.MALE,
        department: "professores",
        birthDate: generateRandomDate(),
        hireDate: generateRandomDate(),
      },
      {
        name: "Amanda Costa",
        matriculation: "22349879",
        email: "amanda.costa@gmail.com",
        phone: "92992019617",
        gender: Gender.FEMALE,
        department: "professores",
        birthDate: generateRandomDate(),
        hireDate: generateRandomDate(),
      },
      {
        name: "Rafael Oliveira",
        matriculation: "21855482",
        email: "rafael.oliveira@gmail.com",
        phone: "92992019618",
        gender: Gender.MALE,
        department: "professores",
        birthDate: generateRandomDate(),
        hireDate: generateRandomDate(),
      },
      {
        name: "Carlos Silva",
        matriculation: "21855483",
        email: "carlos.silva@gmail.com",
        phone: "92992019620",
        gender: Gender.MALE,
        department: "professores",
        birthDate: generateRandomDate(),
        hireDate: generateRandomDate(),
      },
      {
        name: "Beatriz Oliveira",
        matriculation: "22349881",
        email: "beatriz.oliveira@gmail.com",
        phone: "92992019621",
        gender: Gender.FEMALE,
        department: "professores",
        birthDate: generateRandomDate(),
        hireDate: generateRandomDate(),
      },
      {
        name: "André Santos",
        matriculation: "21855484",
        email: "andre.santos@gmail.com",
        phone: "92992019622",
        gender: Gender.MALE,
        department: "professores",
        birthDate: generateRandomDate(),
        hireDate: generateRandomDate(),
      },
      {
        name: "Camila Costa",
        matriculation: "22349882",
        email: "camila.costa@gmail.com",
        phone: "92992019623",
        gender: Gender.FEMALE,
        department: "professores",
        birthDate: generateRandomDate(),
        hireDate: generateRandomDate(),
      },
      {
        name: "Rodrigo Oliveira",
        matriculation: "21855485",
        email: "rodrigo.oliveira@gmail.com",
        phone: "92992019624",
        gender: Gender.MALE,
        department: "professores",
        birthDate: generateRandomDate(),
        hireDate: generateRandomDate(),
      },
      {
        name: "Juliana Santos",
        matriculation: "22349883",
        email: "juliana.santos@gmail.com",
        phone: "92992019625",
        gender: Gender.FEMALE,
        department: "professores",
        birthDate: generateRandomDate(),
        hireDate: generateRandomDate(),
      },
      {
        name: "Leonardo Silva",
        matriculation: "21855486",
        email: "leonardo.silva@gmail.com",
        phone: "92992019626",
        gender: Gender.MALE,
        department: "professores",
        birthDate: generateRandomDate(),
        hireDate: generateRandomDate(),
      },
      {
        name: "Aline Oliveira",
        matriculation: "22349884",
        email: "aline.oliveira@gmail.com",
        phone: "92992019627",
        gender: Gender.FEMALE,
        department: "professores",
        birthDate: generateRandomDate(),
        hireDate: generateRandomDate(),
      },
      {
        name: "Marcelo Santos",
        matriculation: "21855487",
        email: "marcelo.santos@gmail.com",
        phone: "92992019628",
        gender: Gender.MALE,
        department: "professores",
        birthDate: generateRandomDate(),
        hireDate: generateRandomDate(),
      },
    ]);
  }
}
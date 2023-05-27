import LocationDto from "App/Dtos/LocationDto";

export default class LocationFormatter {
  public static formatLocation(locations: any[]): LocationDto[] {
    const formattedLocations: LocationDto[] = [];

    for (const location of locations) {
      const { description, room, floor, block } = location;

      let formattedLocation: LocationDto = {
        id: location.id,
        location: `${description ? `${description} -` : ""}${
          room ? ` ${room} -` : ""
        } PISO ${floor} - BLOCO ${block}`,
      };

      formattedLocations.push(formattedLocation);
    }

    return formattedLocations;
  }
}

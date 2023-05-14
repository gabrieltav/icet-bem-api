import Env from "@ioc:Adonis/Core/Env";
import Route from "@ioc:Adonis/Core/Route";

Route.group(() => {
  Route.get("admin/locations", "AdminLocationsController.index");
})
  .middleware("userIsAdmin")
  .prefix(Env.get("PREFIX"))
  .namespace("App/Controllers/Http/Admin/Inventory/Location");

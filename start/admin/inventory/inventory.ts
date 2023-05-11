import Env from "@ioc:Adonis/Core/Env";
import Route from "@ioc:Adonis/Core/Route";

Route.group(() => {
  Route.post("admin/inventories", "AdminInventoriesController.create");
  Route.put(
    "admin/inventories/:inventoryId",
    "AdminInventoriesController.update"
  );
  Route.get("admin/inventories", "AdminInventoriesController.index");
  Route.get(
    "admin/inventories/:inventoryId",
    "AdminInventoriesController.show"
  );
  Route.delete(
    "admin/inventories/:inventoryId",
    "AdminInventoriesController.delete"
  );
})
  .middleware("userIsAdmin")
  .prefix(Env.get("PREFIX"))
  .namespace("App/Controllers/Http/Admin/Inventory");

import Env from "@ioc:Adonis/Core/Env";
import Route from "@ioc:Adonis/Core/Route";

Route.group(() => {
  Route.post("admin/operators", "AdminOperatorsController.create");
  Route.put("admin/operators/:operatorId", "AdminOperatorsController.update");
  Route.get("admin/operators", "AdminOperatorsController.index");
  Route.get("admin/operators/:operatorId", "AdminOperatorsController.show");
  Route.delete(
    "admin/operators/:operatorId",
    "AdminOperatorsController.delete"
  );
})
  .middleware("userIsAdmin")
  .prefix(Env.get("PREFIX"))
  .namespace("App/Controllers/Http/Admin/Operator");

import Env from "@ioc:Adonis/Core/Env";
import Route from "@ioc:Adonis/Core/Route";

Route.group(() => {
  Route.post("admin/teachers", "AdminTeachersController.create");
  Route.put("admin/teachers/:teacherId", "AdminTeachersController.update");
  Route.get("admin/teachers", "AdminTeachersController.index");
  Route.get("admin/teachers/:teacherId", "AdminTeachersController.show");
  Route.delete("admin/teachers/:teacherId", "AdminTeachersController.delete");
})
  .middleware("auth")
  .prefix(Env.get("PREFIX"))
  .namespace("App/Controllers/Http/Admin/Teacher");

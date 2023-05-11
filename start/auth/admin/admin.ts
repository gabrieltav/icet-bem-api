import Env from "@ioc:Adonis/Core/Env";
import Route from "@ioc:Adonis/Core/Route";

Route.group(() => {
  Route.post("auth/admin/signin", "AdminController.signin");
})
  .prefix(Env.get("PREFIX"))
  .namespace("App/Controllers/Http/Auth/Admin");

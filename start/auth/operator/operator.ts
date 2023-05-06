import Env from "@ioc:Adonis/Core/Env";
import Route from "@ioc:Adonis/Core/Route";

Route.group(() => {
  Route.post("auth/operator/signin", "OperatorController.signin");
})
  .prefix(Env.get("PREFIX"))
  .namespace("App/Controllers/Http/Auth/Operator");

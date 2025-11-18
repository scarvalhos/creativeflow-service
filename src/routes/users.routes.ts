import { FastifyTypedInstance } from "../types";
import { UsersController } from "../controllers/users.controller";

export class UsersRoutes {
  private controller: UsersController;

  constructor(private app: FastifyTypedInstance) {
    this.controller = new UsersController(this.app, "/api/users");
  }

  public register() {
    this.controller.getAll();
    this.controller.post();
  }
}

export async function usersRoutes(app: FastifyTypedInstance) {
  const routes = new UsersRoutes(app);
  routes.register();
}

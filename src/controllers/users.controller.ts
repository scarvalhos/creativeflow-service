import { FastifyTypedInstance } from "../types";
import { UsersService } from "../services/users.service";

import z from "zod";

export class UsersController {
  private service: UsersService;

  constructor(
    private app: FastifyTypedInstance,
    private path: `/api/${string}`
  ) {
    this.service = new UsersService();
  }

  getAll = () =>
    this.app.get(
      this.path,
      {
        schema: {
          tags: ["users"],
          description: "Endpoint to retrieve all users in the system",
          response: {
            200: z.object({
              users: z.array(
                z.object({
                  id: z.string(),
                  name: z.string(),
                  email: z.email(),
                })
              ),
            }),
          },
        },
      },
      async (request) => {
        return this.service.getAllUsers();
      }
    );

  post = () =>
    this.app.post(
      this.path,
      {
        schema: {
          tags: ["users"],
          description: "Endpoint to create a new user in the system",
          body: z.object({
            name: z.string().min(2).max(100),
            email: z.email(),
          }),
          response: {
            201: z.null().describe("User created successfully"),
          },
        },
      },
      async (request, reply) => {
        const { name, email } = request.body;

        await this.service.createUser(name, email);

        return reply.status(201).send();
      }
    );
}

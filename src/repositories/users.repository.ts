import crypto from "node:crypto";

import { User } from "../domain/entities/user";

const users: User[] = [];

export class UsersRepository {
  async findAll(): Promise<User[]> {
    return users;
  }

  async create(user: Omit<User, "id">): Promise<void> {
    users.push({
      id: crypto.randomUUID(),
      ...user,
    });
  }
}

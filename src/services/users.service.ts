import { UsersRepository } from "../repositories/users.repository";

export class UsersService {
  private repository: UsersRepository;

  constructor() {
    this.repository = new UsersRepository();
  }

  async getAllUsers() {
    const users = await this.repository.findAll();
    return { users };
  }

  async createUser(name: string, email: string) {
    await this.repository.create({ name, email });
  }
}

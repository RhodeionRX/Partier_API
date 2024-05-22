import { Injectable } from '@nestjs/common';
import { User } from "./user.entity";
import { Repository } from "sequelize-typescript";

@Injectable()
export class UserService {
  private readonly repository: Repository<User>;

}

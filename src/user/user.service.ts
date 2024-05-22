import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { User } from "./user.entity";
import { Model, Repository } from "sequelize-typescript";
import { CreateUserDTO } from "./DTO/create-user.dto";
import { InjectModel } from "@nestjs/sequelize";

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private readonly repository: typeof User) {}

  public async create(dto: CreateUserDTO): Promise<User> {
    const emailCandidate = this.getUserByEmail(dto.email);
    if (Object.keys(emailCandidate).length !== 0) {
      throw new HttpException('Email already exists', HttpStatus.BAD_REQUEST);
    }

    const loginCandidate = this.getUserByLogin(dto.login);
    if (Object.keys(loginCandidate).length !== 0) {
      throw new HttpException('Login already exists', HttpStatus.BAD_REQUEST);
    }

    const user = await this.repository.create(dto);

    return user;
  }

  public async getUserByEmail(email: string): Promise<User> {
    return await this.repository.findOne({ where: { email: email } });
  }

  public async getUserByLogin(login: string): Promise<User> {
    return await this.repository.findOne({ where: { login: login } });
  }
}

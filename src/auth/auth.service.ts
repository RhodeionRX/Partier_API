import { Injectable } from '@nestjs/common';
import { UserService } from "../user/user.service";
import { User } from "../user/user.entity";
import { CreateUserDTO } from "../user/DTO/create-user.dto";
import * as bcrypt from 'bcryptjs';
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService) {}

  async register(dto : CreateUserDTO): Promise<{ token: string }> {
    const hashedPassword = await bcrypt.hash(dto.password, 10);
    const user = await this.userService.create({
      ...dto,
      password: hashedPassword,
    });

    return this.generateToken(user);
  }

  private async generateToken(user: User) {
    const payload = { uuid: user.id, login: user.login, email: user.email };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}

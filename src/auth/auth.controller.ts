import { Body, Controller, Post, Req } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateUserDTO } from "../user/DTO/create-user.dto";

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  public async register(@Body() dto: CreateUserDTO) {
    return this.authService.register(dto);
  }
}

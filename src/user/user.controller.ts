import { Controller, Get, HttpCode, HttpStatus } from "@nestjs/common";

@Controller('user')
export class UserController {
  @Get()
  @HttpCode(HttpStatus.OK)
  public findAll(): string {
    return `This is a user`;
  }
}

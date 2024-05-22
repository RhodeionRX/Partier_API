import { Controller, Get, HttpCode, HttpStatus, Post } from "@nestjs/common";

@Controller('users')
export class UserController {
  @Get()
  @HttpCode(HttpStatus.OK)
  public async findAll() : Promise<string> {
    return `This is a user`;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  public async create() : Promise<string> {
    return 'This is a use';
  }
}

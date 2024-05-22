import { Body, Controller, Get, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDTO } from "./DTO/create-user.dto";
import { User } from "./user.entity";

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  public async findAll() : Promise<string> {
    return `This is a user`;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  public async create(@Body() dto : CreateUserDTO) : Promise<User> {
    return this.userService.create(dto);
  }
}

import { forwardRef, Module } from "@nestjs/common";
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from "../user/user.module";

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    forwardRef(() => UserModule),
    JwtModule.register({
      secret: 'SECRET KEY KEY',
      signOptions: {
        expiresIn: '7d',
      },
    }),
  ],
  exports: [
    AuthService,
    JwtModule
  ],
})
export class AuthModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user-service/user-service.service';
import { User } from './user.entity';
import { UsersController } from './users.controller';

@Module({
    controllers: [UsersController],
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UserService]
})
export class UserModule { }

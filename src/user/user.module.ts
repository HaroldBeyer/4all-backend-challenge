import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './shared/user.entity';
import { UsersController } from './users.controller';
import { UserService } from './shared/user.service';

@Module({
    controllers: [UsersController],
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UserService],
    exports: [UserService]
})
export class UserModule { }

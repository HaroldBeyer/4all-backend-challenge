import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UsersController {

    constructor(private userService: UserService) { }

    @Post()
    async createUser(@Body() body) {
        return this.userService.createUser(body.password, body.email);
    }
}

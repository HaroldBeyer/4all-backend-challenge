import { Body, Controller, Post } from '@nestjs/common';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiNotAcceptableResponse, ApiTags, ApiParam } from '@nestjs/swagger';
import { User } from './shared/user.entity';
import { UserService } from './shared/user.service';

@ApiTags('users')
@Controller('users')
export class UsersController {

    constructor(private userService: UserService) { }

    @ApiNotAcceptableResponse({ description: "When you insert an already used email" })
    @ApiBadRequestResponse({ description: "When you forget to insert one or more fields of the user in the body object" })
    @ApiCreatedResponse({ description: "Succesfully inserted a user into the db" })
    @Post()
    async createUser(@Body() body: User) {
        return this.userService.createUser(body.password, body.email, body.name);
    }
}

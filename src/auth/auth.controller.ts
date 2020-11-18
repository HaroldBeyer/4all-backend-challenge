import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { LocalAuthGuard } from './shared/local-auth.guard';
import { AuthService } from './shared/auth.service';
import { ApiOkResponse, ApiParam, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { UserLoginResponse } from './shared/user-login.response';

@ApiTags('auth')
@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) { }

    @ApiParam({
        description: "Email and password",
        name: "Email and password",
        schema: {
            type: 'object',
            description: "username and password",
            properties: {
                username: { type: 'string' },
                password: { type: 'string' }
            }
        },
        
    })
    @UseGuards(LocalAuthGuard)
    @ApiOkResponse({type: UserLoginResponse, description: "Returns JWT token"})
    @ApiUnauthorizedResponse({description: "When the user sends a wrong combination of email and password"})
    @Post('login')
    async login(@Request() req: any) {
        return this.authService.login(req.user);
    }




}

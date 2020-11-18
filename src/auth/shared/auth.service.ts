import { UserService } from 'src/user/shared/user.service';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) { }

    async login(user: any) {
        const payload = {email: user.email, sub: user.id};
        return {
            access_token: this.jwtService.sign(payload)
        }
    }

    async validateUser(userEmail: string, userPassword: string) {
        const user = await this.userService.getByEmail(userEmail);

        if (user && bcrypt.compareSync(userPassword, user.password)) {
            const { id, email } = user;
            return { id, email };
        }

        return null;
    }
}
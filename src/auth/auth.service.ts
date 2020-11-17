import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

    constructor(private userService: UserService) {

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
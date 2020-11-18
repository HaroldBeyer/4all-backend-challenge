import { Injectable, NotAcceptableException, BadRequestException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) { }

    async getByEmail(email: string): Promise<User | undefined> {
        return this.userRepository.findOne({
            where: [{ email }]
        });
    }

    async createUser(password: string, email: string, name: string) {
        if (!password || !email || !name)
            throw new BadRequestException()

        const user = await this.getByEmail(email);

        if (user)
            throw new NotAcceptableException();

        password = bcrypt.hashSync(password, 10);

        const newUser = { email, password, name };

        await this.userRepository.insert(newUser);
        
        return HttpStatus.CREATED;
    }
}

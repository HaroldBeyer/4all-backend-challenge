import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({
        description: "Email of the user",
        example: "haroldobeyerbacellar@gmail.com",
        format: "xxxxxx@xxxxxx.xxx",
    })
    @PrimaryColumn({ length: 100 })
    email: string;

    @ApiProperty({
        description: "Password of the user"
    })
    @Column({ length: 100 })
    password: string;

    @ApiProperty({
        description: "Name of the user"
    })
    @Column({ length: 50 })
    name: string;
}

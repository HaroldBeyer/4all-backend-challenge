import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Movie {
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({
        description: "Title of the movie",
    })
    @Column({ length: 100 })
    title: string;

    @ApiProperty({
        description: "Director of the movie"
    })
    @Column({ length: 100 })
    director: string;

    @ApiProperty({
        description: "Conditional variable that shows us if the movie is rented or not"
    })
    @Column()
    isRented: boolean;
}

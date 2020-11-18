import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from './movie.entity';

@Injectable()
export class MoviesService {
    constructor(@InjectRepository(Movie) private readonly movieRepository: Repository<Movie>) { }

    async getMovies(): Promise<Movie[]> {
        const movies = await this.movieRepository.find({
            select: ['id', 'title', 'director', 'isRented'],
            where: [{ "isRented": 0 }]
        });

        return movies;
    }

    async getMovieByTitle(title: string): Promise<Movie[]> {
        return this.movieRepository.find({
            select: ["title", "director", "isRented", "id"],
            where: [{ "title": title }]
        });
    }

    async rentMovie(id: string) {
        return this.movieRepository.update(id, { isRented: true });
    }

    async returnMovie(id: string) {
        return this.movieRepository.update(id, { isRented: false });
    }

    async populate() {
        await this.movieRepository.insert(
            [
                {
                    director: "Haroldo",
                    id: 123,
                    isRented: false,
                    title: "NodeJS: Documentário"
                },
                {
                    director: "Luiz",
                    id: 143,
                    isRented: true,
                    title: "Javascript: O filme"
                },
                {
                    director: "Fulano",
                    id: 523,
                    isRented: false,
                    title: "Typescript: Show ao vivo"
                },
                {
                    director: "Linus",
                    id: 123,
                    isRented: false,
                    title: "Linux: A história do sistema operacional"
                },
            ])
    }
}

import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from './movie.entity';

@Injectable()
export class MoviesService {
    constructor(@InjectRepository(Movie) private readonly movieRepository: Repository<Movie>) { }

    async getMovies(): Promise<Movie[]> {
        return this.movieRepository.find({
            select: ['id', 'title', 'director', 'isRented'],
            where: [{ "isRented": 0 }]
        });
    }

    async getMovieByTitle(title: string): Promise<Movie[]> {
        return this.movieRepository.find({
            select: ["title", "director", "isRented", "id"],
            where: [{ "title": title }]
        });
    }

    async rentMovie(id: string) {
        await this.movieRepository.update(id, { isRented: true });
        return HttpStatus.OK;
    }

    async returnMovie(id: string) {
        await this.movieRepository.update(id, { isRented: false });
        return HttpStatus.OK;
    }
}

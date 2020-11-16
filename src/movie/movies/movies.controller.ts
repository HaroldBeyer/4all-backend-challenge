import { MoviesService } from './movies-service/movies-service.service';
import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {

    constructor(private service: MoviesService) { }

    @Get()
    getAvailableMovies() {
        return this.service.getMovies();
    }

    @Post(':id/rent')
    rent(@Param('id') id: string) {
        return this.service.rentMovie(id);
    }

    @Post(':id/return')
    return(@Param('id') id: string) {
        return this.service.returnMovie(id);
    }

    @Get(':title/title')
    getByTitle(@Param('title') title: string) {
        return this.service.getMovieByTitle(title);
    }
}
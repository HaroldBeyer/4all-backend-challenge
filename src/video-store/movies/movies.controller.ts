import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { MoviesService } from './movies-service/movies-service.service';

@Controller('movies')
export class MoviesController {

    constructor(protected service: MoviesService) { }

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
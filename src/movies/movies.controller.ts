import { Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/shared/jwt.guard';
import { MoviesService } from './shared/movies.service';

@Controller('movies')
export class MoviesController {

    constructor(private readonly service: MoviesService) { }

    @UseGuards(JwtAuthGuard)
    @Get()
    getAvailableMovies() {
        return this.service.getMovies();
    }

    @UseGuards(JwtAuthGuard)
    @Post(':id/rent')
    rent(@Param('id') id: string) {
        return this.service.rentMovie(id);
    }

    @UseGuards(JwtAuthGuard)
    @Post(':id/return')
    return(@Param('id') id: string) {
        return this.service.returnMovie(id);
    }

    @UseGuards(JwtAuthGuard)
    @Get(':title/title')
    getByTitle(@Param('title') title: string) {
        return this.service.getMovieByTitle(title);
    }
}
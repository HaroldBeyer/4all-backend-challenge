import { Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiParam, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/shared/jwt.guard';
import { Movie } from './shared/movie.entity';
import { MoviesService } from './shared/movies.service';

@ApiTags('movies')
@Controller('movies')
@ApiBearerAuth()
export class MoviesController {

    constructor(private readonly service: MoviesService) { }

    @ApiUnauthorizedResponse({ description: 'When sending invalid JWT token' })
    @ApiOkResponse({
        description: "Returned all movies", schema: {
            type: "object",
            properties: {
                id: { type: 'string' },
                title: { type: 'string' },
                director: { type: 'string' },
                isRented: { type: 'boolean' }
            }
        }
    })
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Get()
    getAvailableMovies(): Promise<Movie[]> {
        return this.service.getMovies();
    }

    @ApiBearerAuth()
    @ApiUnauthorizedResponse()
    @ApiOkResponse({description: "Succesfully rented movie"})
    @UseGuards(JwtAuthGuard)
    @Post(':id/rent')
    rent(@Param('id') id: string) {
        return this.service.rentMovie(id);
    }

    @ApiBearerAuth()
    @ApiUnauthorizedResponse()
    @ApiOkResponse({description: "Succesfully returned movie"})
    @UseGuards(JwtAuthGuard)
    @Post(':id/return')
    return(@Param('id') id: string) {
        return this.service.returnMovie(id);
    }

    @ApiUnauthorizedResponse({ description: 'When sending invalid JWT token' })
    @ApiOkResponse({
        description: "Returned all movies with the specified name", schema: {
            type: "object",
            properties: {
                id: { type: 'string' },
                title: { type: 'string' },
                director: { type: 'string' },
                isRented: { type: 'boolean' }
            }
        }
    })
    @ApiParam({name: 'JWT', description: "Bearer token", type: 'string'})
    @ApiBearerAuth()
    @ApiUnauthorizedResponse()
    @UseGuards(JwtAuthGuard)
    @Get(':title/title')
    getByTitle(@Param('title') title: string) {
        return this.service.getMovieByTitle(title);
    }
}
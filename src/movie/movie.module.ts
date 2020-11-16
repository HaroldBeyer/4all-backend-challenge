import { MoviesService } from './movies/movies-service/movies-service.service';
import { MoviesController } from './movies/movies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './movies/movie.entity';
import { Module } from '@nestjs/common';

@Module({
    imports: [TypeOrmModule.forFeature([Movie])],
    controllers: [MoviesController],
    providers: [MoviesService]
})
export class MovieModule {


}

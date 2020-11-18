import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Movie } from './shared/movie.entity';
import { MoviesController } from './movies.controller';
import { MoviesService } from './shared/movies.service';

@Module({
    imports: [TypeOrmModule.forFeature([Movie])],
    controllers: [MoviesController],
    providers: [MoviesService]
})
export class MovieModule {


}

import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { UsersController } from './users/users.controller';
import { UserServiceService } from './users/user-service/user-service.service';
import { MoviesService } from './movies/movies-service/movies-service.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './movies/movie.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Movie])],
  controllers: [MoviesController, UsersController],
  providers: [UserServiceService, MoviesService]
})
export class VideoStoreModule { }

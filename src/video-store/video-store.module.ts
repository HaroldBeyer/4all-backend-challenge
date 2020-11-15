import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { UsersController } from './users/users.controller';
import { UserServiceService } from './users/user-service/user-service.service';
import { MoviesServiceService } from './movies/movies-service/movies-service.service';

@Module({
  controllers: [MoviesController, UsersController],
  providers: [UserServiceService, MoviesServiceService]
})
export class VideoStoreModule {}

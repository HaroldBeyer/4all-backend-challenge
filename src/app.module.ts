import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VideoStoreModule } from './video-store/video-store.module';

@Module({
  imports: [VideoStoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

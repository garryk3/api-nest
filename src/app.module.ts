import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SystemController } from './system/system.controller';
import { SystemService } from './system/system.service';
import { ContentController } from './content/content.controller';
import { ContentService } from './content/content.service';


import config from './config';

@Module({
  imports: [
    HttpModule.register({
      maxRedirects: 5,
      baseURL: config.domoticzUrl,
      timeout: config.timeout,
      headers: {
        Authorization: config.authorization
      }
    }),
  ],
  controllers: [AppController, SystemController, ContentController],
  providers: [AppService, SystemService, ContentService],
})
export class AppModule {}

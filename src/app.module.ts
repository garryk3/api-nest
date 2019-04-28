import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SystemController } from './system/system.controller';
import { SystemService } from './system/system.service';
import { ContentController } from './content/content.controller';
import { ContentService } from './content/content.service';
import { LightService } from './light/light.service';
import { LightController } from './light/light.controller';


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
  controllers: [AppController, SystemController, ContentController, LightController],
  providers: [AppService, SystemService, ContentService, LightService],
})
export class AppModule {}

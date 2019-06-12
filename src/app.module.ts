import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SystemController } from './system/system.controller';
import { SystemService } from './system/system.service';
import { ContentController } from './content/content.controller';
import { ContentService } from './content/content.service';
import { LightService } from './light/light.service';
import { LightController } from './light/light.controller';
import { PlugsService } from './plugs/plugs.service';
import { PlugsController } from './plugs/plugs.controller';
import { BoilerController } from './boiler/boiler.controller';
import { BoilerService } from './boiler/boiler.service';
import { AuthModule } from './auth/auth.module';

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
    AuthModule
  ],
  controllers: [AppController, SystemController, ContentController, LightController, BoilerController, PlugsController],
  providers: [AppService, SystemService, ContentService, LightService, BoilerService, PlugsService],
})
export class AppModule {}

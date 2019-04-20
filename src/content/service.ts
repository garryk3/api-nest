import { Injectable } from '@nestjs/common';

import content from './data.json';

@Injectable()
export class ContentService {
  getHello(): string {
    return content;
  }
}

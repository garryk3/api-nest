import { Injectable, HttpService } from '@nestjs/common';

import { Result } from './../types/interfaces';
import { standartRequest } from './../helper';

@Injectable()
export class SystemService {
    constructor(private readonly httpService: HttpService) {}

    async getVersion(): Promise<Result> {
        const params = {
            type: 'command',
            param: 'getversion'
        };

        return standartRequest(this.httpService, params);
    }

    async getLog(time?: string, level?: string): Promise<Result> {
        /**LOGLEVEL 1 = normal
         * 2 = status
         * 4 = error
         * 268435455 = all
         * LASTLOGTIME  starting with logmessages in LASTLOGTIME seconds since last epoch ( 0 = all available)
         */
        const params = {
            type: 'command',
            param: 'getlog',
            lastlogtime: time || '0',
            loglevel: level || '268435455'
        };

        return standartRequest(this.httpService, params);
    }

    async reboot(): Promise<Result> {
        const params = {
            type: 'command',
            param: 'system_reboot'
        };

        return standartRequest(this.httpService, params);
    }
}

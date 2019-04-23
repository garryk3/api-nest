import { standartRequest } from './../helper';
import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class SystemService {
    constructor(private readonly httpService: HttpService) {}

    async getVersion() {
        const params = {
            type: 'command',
            param: 'getversion'
        };

        return await standartRequest(this.httpService, params);
    }

    async getLog(time?: string, level?: string) {
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

        return await standartRequest(this.httpService, params);
    }

    async reboot() {
        const params = {
            type: 'command',
            param: 'system_reboot'
        };

        return await standartRequest(this.httpService, params);
    }
}

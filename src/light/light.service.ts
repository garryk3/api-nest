import { Injectable, HttpService } from '@nestjs/common';
import { LightIdx, Result } from './../types/interfaces';

import { idxNumbers, requestDeviceStatus, toogleDeviceStatus } from './../helper';

@Injectable()
export class LightService {
    private readonly lightDevicesIdx: number[];

    constructor(private readonly httpService: HttpService) {
        this.lightDevicesIdx = Object.values(idxNumbers.light);
    }

    async getAllDevicesStatuse(): Promise<Result> {
        const lightDeviceInfoRequests = this.lightDevicesIdx.map((idx) => {
            return requestDeviceStatus(this.httpService, idx);
        });
        const statuses = await Promise.all(lightDeviceInfoRequests);

        return {
            error: null,
            result: statuses
        };
    }

    toogleDevice(idx: string, type: string): Promise<Result> {
        return toogleDeviceStatus(this.httpService, idx, type);
    }

    async switchAllOff(): Promise<Result> {
        const lightDeviceToggleRequests = this.lightDevicesIdx.map((idx) => {
            return toogleDeviceStatus(this.httpService, idx, 'Off');
        });
        const result = await Promise.all(lightDeviceToggleRequests);

        return {
            error: null,
            result
        };
    }
}

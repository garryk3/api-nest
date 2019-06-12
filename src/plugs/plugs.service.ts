import { Injectable, HttpService } from '@nestjs/common';
import { Result } from '../types/interfaces';

import { idxNumbers, requestDeviceStatus, toogleDeviceStatus } from '../helper';

@Injectable()
export class PlugsService {
    private readonly plugsDevicesIdx: number[];

    constructor(private readonly httpService: HttpService) {
        this.plugsDevicesIdx = Object.values(idxNumbers.plugs);
    }

    async getAllDevicesStatuse(): Promise<Result> {
        const plugsDeviceInfoRequests = this.plugsDevicesIdx.map((idx) => {
            return requestDeviceStatus(this.httpService, idx);
        });
        const statuses = await Promise.all(plugsDeviceInfoRequests);

        return {
            error: null,
            result: statuses
        };
    }

    toogleDevice(idx: string, type: string): Promise<Result> {
        return toogleDeviceStatus(this.httpService, idx, type);
    }

    async switchAllOff(): Promise<Result> {
        const plugsDeviceToggleRequests = this.plugsDevicesIdx.map((idx) => {
            return toogleDeviceStatus(this.httpService, idx, 'Off');
        });
        const result = await Promise.all(plugsDeviceToggleRequests);

        return {
            error: null,
            result
        };
    }
}

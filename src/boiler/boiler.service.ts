import { Injectable, HttpService } from '@nestjs/common';

import { idxNumbers, requestDeviceStatus, toogleDeviceStatus } from './../helper';
import { Result } from './../types/interfaces';

@Injectable()
export class BoilerService {
    private readonly boilerIdx: number;

    constructor(private readonly httpService: HttpService) {
        this.boilerIdx = idxNumbers.waterheater;
    }

    getStatus(): Promise<Result> {
        return requestDeviceStatus(this.httpService, this.boilerIdx)
    }

    toggleDevice(type: string): Promise<Result> {
        return toogleDeviceStatus(this.httpService, this.boilerIdx, type);
    }
}

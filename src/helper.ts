import { Result, DomoticzParams, LightIdx } from './types/interfaces';
import { HttpService } from '@nestjs/common';

export async function standartRequest(transport: HttpService, params: DomoticzParams): Promise<Result> {
    try {
        const response = await transport.get('/json.htm', { params }).toPromise();

        return {
            result: response.data,
            error: null
        };
    } catch (error) {
        return {
            result: null,
            error: error.message
        };
    }
}

export const idxNumbers: LightIdx =  {
    waterheater: 16, // водонагреватель
    light: {
        room: 20,
        hall: 21,
        kitchen: 45
    }
};

export async function requestDeviceStatus(transport: HttpService, idx: number): Promise<Result> {
    const params: DomoticzParams = {
        type: 'devices',
        rid: idx
    };

    try {
        const response = await transport.get('/json.htm', { params }).toPromise();
        const data = response.data;
        const { Data, Name, Status, Timers, LastUpdate } = data.result[0];

        return {
            error: null,
            result: {
                data: Data,
                name: Name,
                status: Status,
                timers: Timers,
                lastupdate: LastUpdate
            }
        };
    } catch (error) {
        return {
            result: null,
            error: error.message
        };
    }
}

export async function toogleDeviceStatus(transport: HttpService, idx: string | number, type: string): Promise<Result> {
    const params = {
        type: 'command',
        param: 'switchlight',
        idx,
        switchcmd: type // On Off Toggle
    };

    return standartRequest(transport, params);
}

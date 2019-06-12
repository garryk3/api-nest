import { Result, DomoticzParams, DeviceIdx } from './types/interfaces';
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

export const idxNumbers: DeviceIdx =  {
    waterheater: 16, // водонагреватель
    light: {
        room: 20,
        hall: 21,
        kitchen: 45
    },
    plugs: {
        bathroomBoiler: 16,
        kitchenDevicePanel: 7,
        kitchenCommon: 8,
        kitchenDeviceOven: 9,
        kitchenDishwasher: 10,
        kitchenMicrowave: 11,
        kitchenWall: 12,
        kitchenTV: 13,
        roomTV: 25,
        bathroomTowelDryer: 14,
        bathroomKitchenWasher: 15,
        roomCommon1: 17,
        roomCommon2: 19,
        roomPC: 18,
        outerPlug1: 48,
        outerPlug2: 50 
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

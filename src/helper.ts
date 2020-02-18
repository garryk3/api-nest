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
    waterheater: 17,
    gateway: 9,
    light: {
        room: 12,
        hall: 5,
        kitchen: 1,
        strip: 58
    },
    plugs: {
        kitchenTV: 9,
        kitchenKettle: 20,
        kitchenDeviceOven: 4,
        kitchenDishwasher: 13, 
        kitchenMicrowave: 18,
        kitchenYandex: 6,
        bathWasher: 2,
        bathDryer: 15,
        bathBoiler: 17,
        roomPC: 16,
        roomCharger: 7, 
        roomEmpty: 10,
        roomTable: 8,
        kitchenEmpty: 19, 
        // externalDiff: 9999,
        externalTV: 11
    },
    buttons: {
        room: 42,
        hall: 47,
        bath: 53
    },
    switchers: {
        room: 12,
        hall: 5,
        bath_1: 14,
        bath_2: 44,
        wirelessKitchen: 59 
    },
    sensors: {
        motion: {
            kitchen_1: 3,
            kitchen_2: 52,
            bath: 51,
            hall: 50,
            room: 55
        },
        smoke: {
            room: 45,
            kitchen: 46
        },
        water: {
            room: 49
        },
        open: {
            door: 48
        }
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
        const { Data, Name, Status, Timers, LastUpdate, idx } = data.result[0];

        return {
            error: null,
            result: {
                data: Data,
                name: Name,
                status: Status,
                timers: Timers,
                lastupdate: LastUpdate,
                idx
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

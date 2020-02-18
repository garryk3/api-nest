export interface Result {
    result: any;
    error: object;
}

export interface DomoticzParams {
    type: string;
    param?: string;
    rid?: number;
}

export interface DeviceIdx {
    waterheater: number; // водонагреватель
    gateway: number; // шлюз
    light: {
        room: number;
        hall: number;
        kitchen: number;
        strip: number;
    };
    plugs: {
        kitchenTV: number;
        kitchenKettle: number;
        kitchenDeviceOven: number;
        kitchenDishwasher: number;
        kitchenMicrowave: number;
        kitchenYandex: number;
        bathWasher: number;
        bathDryer: number;
        bathBoiler: number;
        roomPC: number;
        roomCharger: number;
        roomEmpty: number;
        roomTable: number;
        kitchenEmpty: number;
        externalDiff?: number;
        externalTV: number;
    };
    buttons: {
        room: number;
        hall: number;
        bath: number;
    };
    switchers: {
        room: number;
        hall: number;
        bath_1: number;
        bath_2: number;
        wirelessKitchen: number;
    };
    sensors: {
        motion: {
            kitchen_1: number;
            kitchen_2: number;
            bath: number;
            hall: number;
            room: number;
        };
        smoke: {
            room: number;
            kitchen: number;
        };
        water: {
            room: number;
        };
        open: {
            door: number;
        }
    }
}

export interface JwtPayload {
    name: string;
    password: string;
    iat?: number;
    exp?: number;
}

export interface JwtResult {
    expiresIn: number;
    accessToken: string;
}

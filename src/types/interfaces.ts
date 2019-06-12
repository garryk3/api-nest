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
    light: {
        room: number;
        hall: number;
        kitchen: number;
    };
    plugs: {
        bathroomBoiler: number;
        kitchenDevicePanel: number;
        kitchenCommon: number;
        kitchenDeviceOven: number;
        kitchenDishwasher: number;
        kitchenMicrowave: number;
        kitchenWall: number;
        kitchenTV: number;
        roomTV: number;
        bathroomTowelDryer: number;
        bathroomKitchenWasher: number;
        roomCommon1: number;
        roomCommon2: number;
        roomPC: number;
        outerPlug1: number;
        outerPlug2: number;
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

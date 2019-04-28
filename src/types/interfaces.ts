export interface Result {
    result: any;
    error: object;
}

export interface DomoticzParams {
    type: string;
    param?: string;
    rid?: number;
}

export interface LightIdx {
    waterheater: number; // водонагреватель
    light: {
        room: number;
        hall: number;
        kitchen: number;
    };
}

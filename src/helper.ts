import { Result, DomoticzParams } from './types/interfaces';
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

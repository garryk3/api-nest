import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class SystemService {
    constructor(private readonly httpService: HttpService) {}

    async getVersion() {
        const params = {
            type: 'command',
            param: 'getversion'
        };

        try {
            const response = await this.httpService.get('/json.htm', { params }).toPromise();

            return {
                result: response.data,
                error: null
            };
        } catch (error) {
            return {
                result: null,
                error
            }
        }

    }
}

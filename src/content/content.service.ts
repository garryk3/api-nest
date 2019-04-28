import { Injectable } from '@nestjs/common';

@Injectable()
export class ContentService {
    getWaterHeaterInfo() {
        return [
            {
                data: [{
                    value: '04:30-05:30'
                }, {
                    value: '20:30-22:00'
                }],
                title: 'С понедельника по пятницу:'
            },
            {
                data: [{
                    value: '09:00-11:00'
                }, {
                    value: '15:00-16:30'
                }, {
                    value: '20:00-22:00'
                }],
                title: 'На выходных:'
            },
            {
                data: [{
                    value: 'включение на 1ч30м'
                }],
                title: 'При выходе из режима энергосбережения (по приходу домой):'
            },
        ];
    }
}

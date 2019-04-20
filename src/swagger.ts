import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

export default class Swagger {
    constructor(private readonly app: INestApplication) {
        this.app = app;
    }

    init(): void {
        const options = new DocumentBuilder()
            .setTitle('Cats example')
            .setDescription('The cats API description')
            .setVersion('1.0')
            .addTag('cats')
            .build();
        const document = SwaggerModule.createDocument(this.app, options);

        SwaggerModule.setup('api', this.app, document);
    }
}

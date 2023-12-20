import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { MODELS } from '@models';

@Module({
    imports: [
        ConfigModule,
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => {
                console.log(configService.get('MONGODB_URI'));
                return {
                    uri: `mongodb+srv://erlandas:UbHzekXizOm9aS0M@cluster0.bab4m.mongodb.net/badger?retryWrites=true&w=majority`,
                };
            },
            inject: [ConfigService],
        }),
        MongooseModule.forFeatureAsync(
            MODELS.map(({ name, schema }) => ({
                name,
                useFactory: () => schema,
            })),
        ),
    ],
    exports: [MongooseModule],
})
export class DatabaseModule {}

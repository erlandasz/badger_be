import { Module } from '@nestjs/common';

import { ServicesModule } from '@services';
import { PdfController } from '@controllers';

@Module({
    imports: [ServicesModule],
    controllers: [PdfController],
})
export class AppModule {}

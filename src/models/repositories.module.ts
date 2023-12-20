import { Module } from '@nestjs/common';
import { DatabaseModule } from '@config';
import { PdfRepository } from './pdf';

@Module({
    imports: [DatabaseModule],
    providers: [PdfRepository],
    exports: [PdfRepository],
})
export class RepositoriesModule {}

import { Module } from '@nestjs/common';

import { PdfGeneratorModule } from '@utils';

import { PdfService } from './pdf/pdf.service';
import { RepositoriesModule } from '../models/repositories.module';

@Module({
    imports: [RepositoriesModule, PdfGeneratorModule],
    providers: [PdfService],
    exports: [PdfService],
})
export class ServicesModule {}

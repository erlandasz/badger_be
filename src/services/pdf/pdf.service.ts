import { Injectable, Logger } from '@nestjs/common';

import { PdfRepository } from '@models';
import { PdfNotFoundError } from '@errors';
import type { ICreatePdfInput } from '../../models/pdf/pdf.schema';

@Injectable()
export class PdfService {
    private readonly logger = new Logger(PdfService.name);

    constructor(private readonly pdfRepository: PdfRepository) {}

    async create(data: ICreatePdfInput) {
        const pdf = await this.pdfRepository.createPdf(data);

        this.logger.log(`Created pdf ${pdf.id}`);

        return pdf;
    }

    findAll() {
        return this.pdfRepository.findAll();
    }

    findOne(id: string) {
        const pdf = this.pdfRepository.findOne(id);

        if (!pdf) throw new PdfNotFoundError(id);

        return pdf;
    }

    async update(id: string, data: any) {
        const pdf = await this.pdfRepository.update(id, data);
        if (!pdf) throw new PdfNotFoundError(id);
        this.logger.log(`Updated pdf ${id}`);

        return pdf;
    }

    async delete(id: string) {
        const pdf = await this.findOne(id);

        this.logger.log(`Deleting pdf ${id}`);

        if (!pdf) throw new PdfNotFoundError(id);

        await this.pdfRepository.delete(id);

        return pdf;
    }
}

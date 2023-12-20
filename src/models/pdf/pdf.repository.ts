import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { type ICreatePdfInput, IPdfModel, Pdf } from './pdf.schema';

@Injectable()
export class PdfRepository {
    constructor(@InjectModel(Pdf.name) private readonly pdfModel: IPdfModel) {}

    createPdf(input: ICreatePdfInput) {
        return this.pdfModel.create(input);
    }

    findAll() {
        return this.pdfModel.find().lean().exec();
    }

    findOne(id: string) {
        return this.pdfModel.findById(id).lean().exec();
    }

    update(id: string, input: any) {
        return this.pdfModel
            .findByIdAndUpdate(id, input, { new: true })
            .lean()
            .exec();
    }

    delete(id: string) {
        return this.pdfModel.findByIdAndDelete(id).lean().exec();
    }
}

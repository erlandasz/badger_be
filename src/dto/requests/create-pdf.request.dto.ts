import { OmitType } from '@nestjs/swagger';
import { PdfDto } from '../pdf.dto';

export class CreatePdfRequestDto extends OmitType(PdfDto, [
    '_id',
    'createdAt',
    'updatedAt',
]) {}

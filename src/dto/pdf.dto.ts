// eslint-disable-next-line max-classes-per-file
import { MEASUREMENT_UNIT, PDF_FORMAT, PDF_ORIENTATION } from '@constants';
import { Types } from 'mongoose';

class TextDto {
    text: string;

    posY: number;

    font: string;

    color: string;

    fontSize: number;

    align: string;

    maxWidth: number;

    maxHeight: number;
}

export class PdfDto {
    format: PDF_FORMAT;

    orientation: PDF_ORIENTATION;

    measurementUnit: MEASUREMENT_UNIT;

    title: string;

    text: TextDto[];

    width?: number;

    height?: number;

    createdAt: NativeDate;

    updatedAt: NativeDate;

    _id: Types.ObjectId;
}

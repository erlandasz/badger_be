import { MEASUREMENT_UNIT, PDF_FORMAT, PDF_ORIENTATION } from '@constants';

export interface ICreatePdfInput {
    format: PDF_FORMAT;
    orientation: PDF_ORIENTATION;
    measurementUnit: MEASUREMENT_UNIT;
}

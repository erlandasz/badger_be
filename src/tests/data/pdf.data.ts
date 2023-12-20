import { MEASUREMENT_UNIT, PDF_FORMAT, PDF_ORIENTATION } from '@constants';

import { PdfDto } from '../../dto/pdf.dto';

export const CREATE_PDF_INPUT: Omit<PdfDto, 'createdAt' | 'updatedAt' | '_id'> =
    {
        format: PDF_FORMAT.A6,
        measurementUnit: MEASUREMENT_UNIT.MILLIMETERS,
        text: [
            {
                text: 'Erlandas',
                fontSize: 16,
                color: '#000000',
                font: 'Arial',
                maxHeight: 20,
                maxWidth: 80,
                posY: 50,
                align: 'center',
            },
            {
                text: 'Zelvys',
                fontSize: 16,
                color: '#000000',
                font: 'Arial',
                maxHeight: 20,
                maxWidth: 80,
                posY: 60,
                align: 'center',
            },
            {
                text: 'Sachs Associates',
                fontSize: 20,
                color: '#000000',
                font: 'Arial',
                maxHeight: 20,
                maxWidth: 80,
                posY: 80,
                align: 'center',
            },
            {
                text: 'IT Consultant',
                font: 'Arial',
                fontSize: 16,
                color: '#000000',
                maxHeight: 20,
                maxWidth: 80,
                posY: 70,
                align: 'center',
            },
        ],
        title: 'New Pdf',
        orientation: PDF_ORIENTATION.PORTRAIT,
    };

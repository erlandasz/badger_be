import { Injectable } from '@nestjs/common';
import JsPDF from 'jspdf';

import { PdfDto } from '../../dto/pdf.dto';

@Injectable()
export class PdfGeneratorService {
    // eslint-disable-next-line class-methods-use-this
    buildPdf(pdfDocument: PdfDto) {
        const file = new JsPDF({
            orientation: pdfDocument.orientation,
            unit: pdfDocument.measurementUnit,
            format: pdfDocument.format,
        });

        const textLines = pdfDocument.text;

        textLines.forEach(line => {
            const {
                text,
                fontSize,
                color,
                font,
                maxHeight,
                maxWidth,
                posY,
                align,
            } = line;

            file.setFontSize(fontSize);
            file.setTextColor(color);
            file.setFont(font);

            const textWidth =
                (file.getStringUnitWidth(text) * fontSize) /
                file.internal.scaleFactor;
            if (textWidth > maxWidth) {
                const newFontSize = (maxWidth / textWidth) * fontSize;
                file.setFontSize(newFontSize);
            }

            const xPos = (file.internal.pageSize.getWidth() - textWidth) / 2;

            file.text(text, xPos, posY, { maxWidth, align: 'justify' as any });
        });

        file.save(`public/${pdfDocument._id}.pdf`);
    }
}

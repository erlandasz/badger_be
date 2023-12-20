import { Injectable } from '@nestjs/common';
import JsPDF from 'jspdf';

@Injectable()
export class PdfGeneratorService {
    constructor() {}

    lol() {
        const jsPdf = new JsPDF({
            format: 'a6',
            orientation: 'p',
            unit: 'mm',
        });

        const firstName = 'Erlandas';
        const lastName = 'Zelvys';
        const companyName = 'Sachs Associates';
        const companyRole = 'IT Consultant';

        const roleColor = '#700dba';

        // Calculate the center position for text
        const centerText = (text, y) => {
            const textWidth = jsPdf.getTextWidth(text);
            return (jsPdf.internal.pageSize.getWidth() - textWidth) / 2;
        };

        jsPdf.text(firstName, centerText(firstName, 20), 20);
        jsPdf.text(lastName, centerText(lastName, 30), 30);
        jsPdf.text(companyName, centerText(companyName, 40), 40);
        jsPdf.setTextColor(roleColor);
        jsPdf.text(companyRole, centerText(companyRole, 50), 50);

        // Add a 1mm high line near the bottom, 10 times thicker, in roleColor
        jsPdf.setDrawColor(roleColor);
        jsPdf.setLineWidth(10); // Adjust line width as needed
        const lineY = jsPdf.internal.pageSize.getHeight() - 20; // 1mm from the bottom
        jsPdf.line(10, lineY, jsPdf.internal.pageSize.getWidth() - 10, lineY);

        jsPdf.save('public/test.pdf');
    }
}

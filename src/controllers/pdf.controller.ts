import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
} from '@nestjs/common';
import { PdfService } from '../services/pdf/pdf.service';
import { CreatePdfRequestDto, UpdatePdfRequestDto } from '../dto';

@Controller('pdf')
export class PdfController {
    constructor(private readonly pdfService: PdfService) {}

    @Get()
    findAll() {
        return this.pdfService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.pdfService.findOne(id);
    }

    @Post()
    create(@Body() data: CreatePdfRequestDto) {
        return this.pdfService.create(data);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() data: UpdatePdfRequestDto) {
        return this.pdfService.update(id, data);
    }

    @Delete(':id')
    deleteOne(@Param('id') id: string) {
        return this.pdfService.delete(id);
    }
}

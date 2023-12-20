import { HttpStatus } from '@nestjs/common';
import { ApiErrorFactory } from './error-factory';

export const PdfNotFoundError = ApiErrorFactory.createErrorClass(
    'NOT_FOUND',
    HttpStatus.NOT_FOUND,
    `Pdf %s not found`,
);

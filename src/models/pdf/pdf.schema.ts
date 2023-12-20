import { Schema, InferSchemaType, Model } from 'mongoose';
import { ModelDefinition } from '@nestjs/mongoose';
import { MEASUREMENT_UNIT, PDF_FORMAT, PDF_ORIENTATION } from '@constants';
import { textSchema } from './sub-schemas/text.schema';

export const pdfSchema = new Schema(
    {
        format: {
            type: String,
            required: true,
            enum: PDF_FORMAT,
        },
        orientation: {
            type: String,
            required: true,
            enum: PDF_ORIENTATION,
        },
        measurementUnit: {
            type: String,
            required: true,
            enum: MEASUREMENT_UNIT,
        },
        title: { type: String, required: true },
        text: { type: [textSchema], required: true },
        width: Number,
        height: Number,
    },
    {
        timestamps: true,
    },
);

interface IPdf extends InferSchemaType<typeof pdfSchema> {}

export interface IPdfDocument extends IPdf, Document {}

export interface IPdfModel extends Model<IPdfDocument> {}

export interface ICreatePdfInput
    extends Omit<IPdf, 'createdAt' | 'updatedAt' | '_id' | 'text'> {
    text: InferSchemaType<typeof textSchema>[];
}

export const Pdf: ModelDefinition = {
    name: 'pdf',
    schema: pdfSchema,
    collection: 'pdf',
};

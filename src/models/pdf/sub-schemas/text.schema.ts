import { Schema } from 'mongoose';

export const textSchema = new Schema(
    {
        text: { type: String, required: true },
        posY: { type: Number, required: true },
        font: { type: String, required: true },
        color: { type: String, required: true },
        fontSize: { type: Number, required: true },
        align: { type: String, required: true },
        maxWidth: { type: Number, required: true },
        maxHeight: { type: Number, required: true },
    },
    {
        _id: false,
    },
);

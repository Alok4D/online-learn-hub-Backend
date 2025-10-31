import { model, Schema } from "mongoose";
import { IDigitalProduct, Category } from "./digitalProduct.interface";

const digitalProductSchema = new Schema<IDigitalProduct>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: {
      type: String,
      enum: Object.values(Category), // enum values match interface
      required: true,
    },
    price: { type: Number, required: true },
    fileUrl: { type: String, required: true },
    licenseKey: { type: String },
    version: { type: String },
    downloadLimit: { type: Number },
  },
  { timestamps: true } // createdAt & updatedAt automatically
);

export const DigitalProduct = model<IDigitalProduct>(
  "DigitalProduct",
  digitalProductSchema
);

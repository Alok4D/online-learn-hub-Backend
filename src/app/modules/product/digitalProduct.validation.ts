import { z } from "zod";
import { Category } from "./digitalProduct.interface";

// Category values from interface enum
const categoryEnum = Object.values(Category) as [Category, ...Category[]];

const digitalProductSchema = z.object({
  name: z.string().min(1, "Product name is required"),
  description: z.string().min(1, "Description is required"),
  category: z.enum(categoryEnum, { message: "Invalid category" }),
  price: z.number().positive("Price must be a positive number"),
  fileUrl: z.string().url("File URL must be a valid URL"),
  licenseKey: z.string().optional(),
  version: z.string().optional(),
  downloadLimit: z.number().int().positive().optional(),
});

export const digitalProductValidations = {
  createProductSchema: digitalProductSchema,
  updateProductSchema: digitalProductSchema.partial(),
};

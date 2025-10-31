import { z } from "zod";

export const createCourseSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  category: z.string().min(2, "Category is required"),
  price: z.number().nonnegative("Price must be positive"),
  level: z.enum(["Beginner", "Intermediate", "Advanced"]),
  duration: z.string().min(2, "Duration is required"),
  videoUrls: z.array(z.string().url()).optional(),
  resources: z.array(z.string().url()).optional(),
  coupon: z.string().optional(),
  discount: z.number().optional(),
});

export const updateCourseSchema = createCourseSchema.partial(); // optional for update

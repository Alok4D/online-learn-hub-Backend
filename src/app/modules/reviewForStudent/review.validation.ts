import { z } from "zod";

export const createReviewSchema = z.object({
  userId: z.string().min(1, "User ID is required"),
  courseId: z.string().optional(),
  productId: z.string().optional(),
  rating: z.number().min(1, "Rating must be at least 1").max(5, "Rating cannot exceed 5"),
  comment: z.string().optional(),
});

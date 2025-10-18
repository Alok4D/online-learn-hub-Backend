import { model, Schema } from "mongoose";
import { ReviewData } from "./review.interface";

const reviewSchema = new Schema<ReviewData>({
  reviewId: { type: String, required: true },
  title: { type: String, required: true },
  studentName: { type: String },
  studentImg: { type: String },
  description: { type: String },
  date: { type: String },
  videoUrl: { type: String },
});

export const Review = model<ReviewData>("Review", reviewSchema);

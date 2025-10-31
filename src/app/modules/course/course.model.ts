import { Schema, model } from "mongoose";
import { CourseLevel, ICourse } from "./course.interface";


const courseSchema = new Schema<ICourse>(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    level: { type: String, enum: Object.values(CourseLevel), default: CourseLevel.BEGINNER },
    duration: { type: String, required: true },
    videoUrls: { type: [String], default: [] },
    resources: { type: [String], default: [] },
    coupon: { type: String },
    discount: { type: Number, default: 0 },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true, versionKey: false }
);

export const Course = model<ICourse>("Course", courseSchema);

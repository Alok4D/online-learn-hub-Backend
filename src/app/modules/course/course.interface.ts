import { Types } from "mongoose";

export enum CourseLevel {
  BEGINNER = "Beginner",
  INTERMEDIATE = "Intermediate",
  ADVANCED = "Advanced",
}

export interface ICourse {
  _id?: Types.ObjectId;
  title: string;
  description: string;
  category: string;
  price: number;
  level: CourseLevel;
  duration: string; // e.g., "3h 20m" or "10 weeks"
  videoUrls: string[]; // pre-recorded video URLs
  resources?: string[]; // PDF or other files
  coupon?: string;
  discount?: number;
  isDeleted?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

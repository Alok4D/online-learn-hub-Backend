import { Types } from "mongoose";

export interface IReview {
  _id?: Types.ObjectId;
  userId: Types.ObjectId;
  courseId?: Types.ObjectId;
  productId?: Types.ObjectId;
  rating: number; // 1-5
  comment?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

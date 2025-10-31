import { IReview } from "./review.interface";
import { Review } from "./review.model";

const createReview = async (payload: IReview) => {
  const review = await Review.create(payload);
  return review;
};

const getReviewsByCourse = async (courseId: string) => {
  const reviews = await Review.find({ courseId }).populate("userId", "name email");
  return reviews;
};

const getReviewsByProduct = async (productId: string) => {
  const reviews = await Review.find({ productId }).populate("userId", "name email");
  return reviews;
};

export const ReviewService = {
  createReview,
  getReviewsByCourse,
  getReviewsByProduct,
};

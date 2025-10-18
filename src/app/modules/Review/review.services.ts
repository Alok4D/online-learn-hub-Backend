import { ReviewData } from "./review.interface";
import { Review } from "./review.model";

// Get all reviews
const getAllReviews = async () => await Review.find();

// Get review by ID
const getReviewById = async (id: string) => await Review.findById(id);

// Create review
const createReview = async (payload: ReviewData) => await Review.create(payload);

// Update review
const updateReview = async (id: string, payload: Partial<ReviewData>) =>
  await Review.findByIdAndUpdate(id, payload, { new: true });

// Delete review
const deleteReview = async (id: string) => await Review.findByIdAndDelete(id);

export const ReviewServices = {
  getAllReviews,
  getReviewById,
  createReview,
  updateReview,
  deleteReview,
};

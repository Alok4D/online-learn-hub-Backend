import { Request, Response } from "express";
import { ReviewServices } from "./review.services";


// Get all reviews
const getAllReviewsController = async (req: Request, res: Response) => {
  try {
    const reviews = await ReviewServices.getAllReviews();
    res.status(200).json({ success: true, data: reviews });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch reviews", error });
  }
};

// Get single review
const getReviewByIdController = async (req: Request, res: Response) => {
  try {
    const review = await ReviewServices.getReviewById(req.params.id);
    if (!review) return res.status(404).json({ success: false, message: "Review not found" });
    res.status(200).json({ success: true, data: review });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch review" });
  }
};

// Create review
const createReviewController = async (req: Request, res: Response) => {
  try {
    const review = await ReviewServices.createReview(req.body);
    res.status(201).json({ success: true, data: review });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to create review" });
  }
};

// Update review
const updateReviewController = async (req: Request, res: Response) => {
  try {
    const review = await ReviewServices.updateReview(req.params.id, req.body);
    if (!review) return res.status(404).json({ success: false, message: "Review not found" });
    res.status(200).json({ success: true, data: review });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to update review" });
  }
};

// Delete review
const deleteReviewController = async (req: Request, res: Response) => {
  try {
    const review = await ReviewServices.deleteReview(req.params.id);
    if (!review) return res.status(404).json({ success: false, message: "Review not found" });
    res.status(200).json({ success: true, message: "Review deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to delete review" });
  }
};

export const reviewController = {
  getAllReviewsController,
  getReviewByIdController,
  createReviewController,
  updateReviewController,
  deleteReviewController,
};

import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status-codes";
import { ReviewService } from "./review.services";


const createReview = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const review = await ReviewService.createReview(req.body);
    res.status(httpStatus.CREATED).json({
      success: true,
      message: "Review submitted successfully",
      data: review,
    });
  } catch (error) {
    next(error);
  }
};

const getCourseReviews = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const reviews = await ReviewService.getReviewsByCourse(req.params.courseId);
    res.status(httpStatus.OK).json({
      success: true,
      message: "Course reviews fetched successfully",
      data: reviews,
    });
  } catch (error) {
    next(error);
  }
};

const getProductReviews = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const reviews = await ReviewService.getReviewsByProduct(req.params.productId);
    res.status(httpStatus.OK).json({
      success: true,
      message: "Product reviews fetched successfully",
      data: reviews,
    });
  } catch (error) {
    next(error);
  }
};

export const ReviewController = {
  createReview,
  getCourseReviews,
  getProductReviews,
};

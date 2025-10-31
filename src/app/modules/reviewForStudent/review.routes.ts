import { Router } from "express";
import { ReviewController } from "./review.controller";
import { createReviewSchema } from "./review.validation";
import validateRequest from "../../middleware/validateRequest";

const router = Router();

// POST review
router.post("/", validateRequest(createReviewSchema), ReviewController.createReview);

// GET reviews by course
router.get("/course/:courseId", ReviewController.getCourseReviews);

// GET reviews by product
router.get("/product/:productId", ReviewController.getProductReviews);

export const reviewRoutes = router;

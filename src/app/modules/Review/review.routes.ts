import express from "express";
import { reviewController } from "./review.controller";

const router = express.Router();

// Base URL: /api/reviews
router.get("/", reviewController.getAllReviewsController);
router.get("/:id", reviewController.getReviewByIdController);
router.post("/", reviewController.createReviewController);
router.put("/:id", reviewController.updateReviewController);
router.delete("/:id", reviewController.deleteReviewController);

export const reviewRoutes = router;

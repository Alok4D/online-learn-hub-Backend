import express from "express";
import { courseController } from "./course.controller";

const router = express.Router();

// Base URL: /api/courses
router.get("/", courseController.getAllCoursesController);
router.get("/:id", courseController.getCourseByIdController);
router.post("/", courseController.createCourseController);
router.put("/:id", courseController.updateCourseController);
router.delete("/:id", courseController.deleteCourseController);

export const courseRoutes = router;

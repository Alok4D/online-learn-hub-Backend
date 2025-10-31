import { Router } from "express";
import { checkAuth } from "../../middleware/checkAuth";
import { Role } from "../user/user.interface";
import validateRequest from "../../middleware/validateRequest";
import { createCourseSchema, updateCourseSchema } from "./course.validation";
import { CourseControllers } from "./course.controller";


const router = Router();

// Admin-only routes with validation
router.post("/", checkAuth(Role.ADMIN), validateRequest(createCourseSchema), CourseControllers.createCourse);
router.put("/:id", checkAuth(Role.ADMIN), validateRequest(updateCourseSchema), CourseControllers.updateCourse);
router.delete("/:id", checkAuth(Role.ADMIN), CourseControllers.deleteCourse);

// Public routes
router.get("/", CourseControllers.getAllCourses);
router.get("/:id", CourseControllers.getSingleCourse);

export const courseRoutes = router;

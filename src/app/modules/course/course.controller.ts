import { Request, Response } from "express";
import { courses } from "./course.services";


// Get all courses
const getAllCoursesController = async (req: Request, res: Response) => {
  try {
    const result = await courses.getAllCourses();
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error", error });
  }
};

// Get single course
const getCourseByIdController = async (req: Request, res: Response) => {
  try {
    const course = await courses.getCourseById(req.params.id);
    if (!course) return res.status(404).json({ success: false, message: "Course not found" });
    res.status(200).json({ success: true, data: course });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch course" });
  }
};

// Create course
const createCourseController = async (req: Request, res: Response) => {
  try {
    const course = await courses.createCourse(req.body);
    res.status(201).json({ success: true, data: course });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to create course" });
  }
};

// Update course
const updateCourseController = async (req: Request, res: Response) => {
  try {
    const course = await courses.updateCourse(req.params.id, req.body);
    if (!course) return res.status(404).json({ success: false, message: "Course not found" });
    res.status(200).json({ success: true, data: course });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to update course" });
  }
};

// Delete course
const deleteCourseController = async (req: Request, res: Response) => {
  try {
    const course = await courses.deleteCourse(req.params.id);
    if (!course) return res.status(404).json({ success: false, message: "Course not found" });
    res.status(200).json({ success: true, message: "Course deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to delete course" });
  }
};

export const courseController = {
  getAllCoursesController,
  getCourseByIdController,
  createCourseController,
  updateCourseController,
  deleteCourseController,
};

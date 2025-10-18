import { ICourse } from "./course.interface";
import { Course } from "./course.model";

// Get all courses
const getAllCourses = async () => await Course.find();

// Get course by ID
const getCourseById = async (id: string) => await Course.findById(id);

// Create course
const createCourse = async (payload: ICourse) => await Course.create(payload);

// Update course
const updateCourse = async (id: string, payload: Partial<ICourse>) =>
  await Course.findByIdAndUpdate(id, payload, { new: true });

// Delete course
const deleteCourse = async (id: string) => await Course.findByIdAndDelete(id);

export const courses = {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
};

import { ICourse } from "./course.interface";
import { Course } from "./course.model";


const createCourse = async (payload: ICourse) => {
  const course = await Course.create(payload);
  return course;
};

const getAllCourses = async () => {
  const courses = await Course.find({ isDeleted: false });
  const total = await Course.countDocuments({ isDeleted: false });
  return { data: courses, meta: { total } };
};

const getSingleCourse = async (id: string) => {
  const course = await Course.findById(id);
  return course;
};

const updateCourse = async (id: string, payload: Partial<ICourse>) => {
  const updated = await Course.findByIdAndUpdate(id, payload, { new: true });
  return updated;
};

const deleteCourse = async (id: string) => {
  const deleted = await Course.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true }
  );
  return deleted;
};

export const CourseServices = {
  createCourse,
  getAllCourses,
  getSingleCourse,
  updateCourse,
  deleteCourse,
};

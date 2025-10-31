import { z } from "zod";

export const createCertificateZodValidationSchema = z.object({
  studentId: z.string().min(1, "Student ID is required"),
  courseId: z.string().min(1, "Course ID is required"),
  examScore: z.number().min(0, "Exam score cannot be negative"),
});

export const certificateValidations = {
  createCertificateZodValidationSchema,
};

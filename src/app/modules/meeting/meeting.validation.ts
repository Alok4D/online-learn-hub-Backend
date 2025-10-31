import { z } from "zod";

export const createMeetingSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  courseId: z.string().min(1, "CourseId is required"),
  instructorId: z.string().min(1, "InstructorId is required"),
  meetingLink: z.string().url("Meeting link must be a valid URL"),
  startTime: z.string().min(1, "Start time is required"),
  endTime: z.string().min(1, "End time is required"),
});

export const updateMeetingSchema = createMeetingSchema.partial();

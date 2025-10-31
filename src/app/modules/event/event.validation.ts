import { z } from "zod";
import { EventType } from "./event.interface";

export const createEventZodValidationSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  type: z.enum([EventType.FREE, EventType.PAID]), // ✅ safe enum usage
  price: z.number().optional(),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
  liveLink: z.string().url("Live link must be a valid URL"),
});

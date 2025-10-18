import { model, Schema } from "mongoose";
import { Certification } from "./certification.interface";

const certificationSchema = new Schema<Certification>({
  certificationId: { type: String, required: true, unique: true },
  name: { type: String, required: true, trim: true },
  image: { type: String },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  studentId: { type: String, required: true, unique: true },
  courseName: { type: String, required: true },
  batchName: { type: String, required: true },
});

export const certification = model<Certification>(
  "certification",
  certificationSchema
);

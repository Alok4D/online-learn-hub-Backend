import { Schema, model } from "mongoose";
import { ICertificate } from "./certification.interface";


const certificateSchema = new Schema<ICertificate>(
  {
    studentId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    courseId: { type: Schema.Types.ObjectId, ref: "Course", required: true },
    examScore: { type: Number, required: true },
    approvedByAdmin: { type: Boolean, default: false },
    pdfUrl: { type: String },
  },
  { timestamps: true,
    versionKey: false,
   }
);

export const Certificate = model<ICertificate>("Certificate", certificateSchema);

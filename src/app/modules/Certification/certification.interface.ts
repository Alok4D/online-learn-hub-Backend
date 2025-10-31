import { Types } from "mongoose";

export interface ICertificate {
  _id?: Types.ObjectId;
  studentId: Types.ObjectId;
  courseId: Types.ObjectId;
  examScore: number;
  issuedAt?: Date;
  approvedByAdmin?: boolean;
  pdfUrl?: string; // URL to generated PDF
}

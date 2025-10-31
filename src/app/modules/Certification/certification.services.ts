import PDFDocument from 'pdfkit';

import fs from "fs";
import path from "path";

import { Types } from "mongoose";
import { Certificate } from './certification.model';

const generatePDF = async (
  studentName: string,
  courseName: string,
  examScore: number
): Promise<string> => {
  const filePath = path.join(
    __dirname,
    `../../../certificates/${studentName}-${courseName}.pdf`
  );
  const doc = new PDFDocument();

  // Create certificates folder if not exists
  fs.mkdirSync(path.join(__dirname, "../../../certificates"), {
    recursive: true,
  });

  doc.pipe(fs.createWriteStream(filePath));
  doc.fontSize(20).text("Certificate of Completion", { align: "center" });
  doc.moveDown();
  doc
    .fontSize(14)
    .text(
      `This certifies that ${studentName} has successfully completed the course ${courseName} with score ${examScore}%`
    );
  doc.end();

  return filePath;
};

const createCertificate = async (
  studentId: Types.ObjectId,
  courseId: Types.ObjectId,
  studentName: string,
  courseName: string,
  examScore: number
) => {
  const pdfUrl = await generatePDF(studentName, courseName, examScore);

  const certificate = await Certificate.create({
    studentId,
    courseId,
    examScore,
    pdfUrl,
    approvedByAdmin: false,
  });

  return certificate;
};

export const CertificateService = {
  createCertificate,
};

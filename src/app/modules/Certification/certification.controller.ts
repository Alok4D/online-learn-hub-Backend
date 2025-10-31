import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status-codes";
import { CertificateService } from "./certification.services";
import { Certificate } from "./certification.model";

const createCertificate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { studentId, courseId, studentName, courseName, examScore } =
      req.body;

    const certificate = await CertificateService.createCertificate(
      studentId,
      courseId,
      studentName,
      courseName,
      examScore
    );

    res.status(httpStatus.CREATED).json({
      success: true,
      message: "Certificate generated successfully!",
      certificate,
    });
  } catch (error) {
    next(error);
  }
};

const approveCertificate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const certificate = await Certificate.findByIdAndUpdate(
      id,
      { approvedByAdmin: true },
      { new: true }
    );

    res.status(httpStatus.OK).json({
      success: true,
      message: "Certificate approved!",
      certificate,
    });
  } catch (error) {
    next(error);
  }
};

const getCertificate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const certificate = await Certificate.findById(req.params.id);
    res.status(httpStatus.OK).json({
      success: true,
      certificate,
    });
  } catch (error) {
    next(error);
  }
};

export const CertificateController = {
  createCertificate,
  approveCertificate,
  getCertificate,
};

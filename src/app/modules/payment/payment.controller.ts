import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status-codes";
import { PaymentServices } from "./payment.service";
import { PaymentStatus } from "./payment.interface";


const createPayment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const payment = await PaymentServices.createPayment(req.body);
    res.status(httpStatus.CREATED).json({
      success: true,
      message: "Payment created successfully",
      data: payment,
    });
  } catch (err) {
    next(err);
  }
};

const getAllPayments = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const payments = await PaymentServices.getAllPayments();
    res.status(httpStatus.OK).json({
      success: true,
      message: "All payments retrieved",
      data: payments,
    });
  } catch (err) {
    next(err);
  }
};

const getPaymentById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const payment = await PaymentServices.getPaymentById(req.params.id);
    res.status(httpStatus.OK).json({
      success: true,
      message: "Payment retrieved",
      data: payment,
    });
  } catch (err) {
    next(err);
  }
};

const updatePaymentStatus = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const payment = await PaymentServices.updatePaymentStatus(
      req.params.id,
      req.body.status as PaymentStatus
    );
    res.status(httpStatus.OK).json({
      success: true,
      message: "Payment status updated",
      data: payment,
    });
  } catch (err) {
    next(err);
  }
};

const deletePayment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await PaymentServices.deletePayment(req.params.id);
    res.status(httpStatus.OK).json({
      success: true,
      message: result.message,
    });
  } catch (err) {
    next(err);
  }
};

export const PaymentControllers = {
  createPayment,
  getAllPayments,
  getPaymentById,
  updatePaymentStatus,
  deletePayment,
};

import { Request, Response, NextFunction } from "express";
import { DigitalProductService } from "./digitalProduct.service";
import httpStatus from "http-status-codes";

const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const product = await DigitalProductService.createProduct(req.body);
    res.status(httpStatus.CREATED).json({
      success: true,
      message: "Digital product created successfully",
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await DigitalProductService.getAllProducts();
    res.status(httpStatus.OK).json({
      success: true,
      message: "All digital products retrieved successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const DigitalProductController = {
  createProduct,
  getAllProducts,
};

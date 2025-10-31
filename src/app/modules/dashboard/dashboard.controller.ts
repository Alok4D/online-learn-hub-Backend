import { Request, Response } from "express";
import { DashboardService } from "./dashboard.service";
import catchAsync from "../../utlis/catchAsync";
import sendResponse from "../../utlis/sendResponse";


const getDashboardData = catchAsync(async (req: Request, res: Response) => {
  const data = await DashboardService.getDashboardAnalytics();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Dashboard analytics fetched successfully",
    data,
  });
});

export const DashboardController = {
  getDashboardData,
};

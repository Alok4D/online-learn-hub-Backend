import { Request, Response, NextFunction } from "express";
import { EventServices } from "./event.service";
import httpStatus from "http-status-codes";

const createEvent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const event = await EventServices.createEvent(req.body);
    res.status(httpStatus.CREATED).json({
      success: true,
      message: "Event created successfully!",
      data: event,
    });
  } catch (error) {
    next(error);
  }
};

const getAllEvents = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await EventServices.getAllEvents();
    res.status(httpStatus.OK).json({
      success: true,
      message: "All events retrieved successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const EventControllers = {
  createEvent,
  getAllEvents,
};

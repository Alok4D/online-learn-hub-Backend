import { Router } from "express";
import { EventControllers } from "./event.controller";
import validateRequest from "../../middleware/validateRequest";
import { createEventZodValidationSchema } from "./event.validation";
import { checkAuth } from "../../middleware/checkAuth";
import { Role } from "../user/user.interface";

const router = Router();
// Create event (Admin only)
router.post(
  "/",
  checkAuth(Role.ADMIN),
  validateRequest(createEventZodValidationSchema),
  EventControllers.createEvent
);
router.get("/", EventControllers.getAllEvents);

export const EventRoutes = router;

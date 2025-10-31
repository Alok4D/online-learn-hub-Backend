import { Router } from "express";
import { MeetingController } from "./meeting.controller";

import { createMeetingSchema, updateMeetingSchema } from "./meeting.validation";
import { checkAuth } from "../../middleware/checkAuth";
import validateRequest from "../../middleware/validateRequest";

const router = Router();

// Admin-only routes
router.post("/", checkAuth("admin"), validateRequest(createMeetingSchema), MeetingController.createMeeting);
router.put("/:id", checkAuth("admin"), validateRequest(updateMeetingSchema), MeetingController.updateMeeting);
router.delete("/:id", checkAuth("admin"), MeetingController.deleteMeeting);

// Public/Student routes
router.get("/", MeetingController.getAllMeetings);
router.get("/:id", MeetingController.getMeetingById);
router.post("/:id/participants", checkAuth("student"), MeetingController.addParticipant);
router.get("/:id/participants", checkAuth("admin"), MeetingController.getParticipants);

export const MeetingRoutes = router;

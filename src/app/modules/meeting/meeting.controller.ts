import { Request, Response } from "express";
import { MeetingService } from "./meeting.service";

export const MeetingController = {
  createMeeting: async (req: Request, res: Response) => {
    const meeting = await MeetingService.createMeeting(req.body);
    res.status(201).json({ success: true, data: meeting });
  },

  getAllMeetings: async (req: Request, res: Response) => {
    const meetings = await MeetingService.getAllMeetings();
    res.json({ success: true, data: meetings });
  },

  getMeetingById: async (req: Request, res: Response) => {
    const meeting = await MeetingService.getMeetingById(req.params.id);
    res.json({ success: true, data: meeting });
  },

  updateMeeting: async (req: Request, res: Response) => {
    const updated = await MeetingService.updateMeeting(req.params.id, req.body);
    res.json({ success: true, data: updated });
  },

  deleteMeeting: async (req: Request, res: Response) => {
    await MeetingService.deleteMeeting(req.params.id);
    res.json({ success: true, message: "Meeting deleted" });
  },

  addParticipant: async (req: Request, res: Response) => {
    const participant = await MeetingService.addParticipant(req.params.id, req.body.userId);
    res.json({ success: true, data: participant });
  },

  getParticipants: async (req: Request, res: Response) => {
    const participants = await MeetingService.getParticipants(req.params.id);
    res.json({ success: true, data: participants });
  },
};

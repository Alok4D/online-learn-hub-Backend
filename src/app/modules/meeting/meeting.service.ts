import { Meeting, MeetingParticipant } from "./meeting.model";
import { IMeeting } from "./meeting.interface";

export const MeetingService = {
  createMeeting: async (meetingData: IMeeting) => {
    const meeting = await Meeting.create(meetingData);
    return meeting;
  },

  getAllMeetings: async () => {
    return await Meeting.find().populate("courseId instructorId");
  },

  getMeetingById: async (id: string) => {
    return await Meeting.findById(id).populate("courseId instructorId");
  },

  updateMeeting: async (id: string, updateData: Partial<IMeeting>) => {
    return await Meeting.findByIdAndUpdate(id, updateData, { new: true });
  },

  deleteMeeting: async (id: string) => {
    return await Meeting.findByIdAndDelete(id);
  },

  addParticipant: async (meetingId: string, userId: string) => {
    const participant = await MeetingParticipant.create({
      meetingId,
      userId,
      joinedAt: new Date(),
    });
    return participant;
  },

  getParticipants: async (meetingId: string) => {
    return await MeetingParticipant.find({ meetingId }).populate("userId");
  },
};

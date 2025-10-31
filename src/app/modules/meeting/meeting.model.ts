import { model, Schema } from "mongoose";
import { IMeeting, MeetingStatus, IMeetingParticipant } from "./meeting.interface";

const meetingSchema = new Schema<IMeeting>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  courseId: { type: Schema.Types.ObjectId, ref: "Course", required: true },
  instructorId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  meetingLink: { type: String, required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  status: { type: String, enum: Object.values(MeetingStatus), default: MeetingStatus.UPCOMING },
}, { timestamps: true });

const participantSchema = new Schema<IMeetingParticipant>({
  meetingId: { type: Schema.Types.ObjectId, ref: "Meeting", required: true },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  joinedAt: { type: Date, default: Date.now },
  leftAt: { type: Date },
  duration: { type: Number },
}, { timestamps: true });

export const Meeting = model<IMeeting>("Meeting", meetingSchema);
export const MeetingParticipant = model<IMeetingParticipant>("MeetingParticipant", participantSchema);

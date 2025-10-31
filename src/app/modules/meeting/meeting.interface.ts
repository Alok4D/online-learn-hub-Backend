import { Types } from "mongoose";

export enum MeetingStatus {
  UPCOMING = "upcoming",
  LIVE = "live",
  ENDED = "ended",
}

export interface IMeeting {
  _id?: Types.ObjectId;
  title: string;
  description: string;
  courseId: Types.ObjectId;
  instructorId: Types.ObjectId;
  meetingLink: string;
  startTime: Date;
  endTime: Date;
  status: MeetingStatus;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IMeetingParticipant {
  _id?: Types.ObjectId;
  meetingId: Types.ObjectId;
  userId: Types.ObjectId;
  joinedAt: Date;
  leftAt?: Date;
  duration?: number; // in minutes
}

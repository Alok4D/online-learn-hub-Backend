import { Types } from "mongoose";

export enum EventType {
  FREE = "Free",
  PAID = "Paid",
}

export interface IEvent {
  _id?: Types.ObjectId;
  title: string;
  description: string;
  type: EventType;
  price?: number;
  date: string;
  time: string;
  liveLink: string;
  createdAt?: Date;
  updatedAt?: Date;
}

import { model, Schema } from "mongoose";
import { IEvent, EventType } from "./event.interface";

const eventSchema = new Schema<IEvent>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    type: {
      type: String,
      enum: Object.values(EventType) as readonly string[], // ✅ cast as readonly
      required: true,
    },
    price: { type: Number },
    date: { type: String, required: true },
    time: { type: String, required: true },
    liveLink: { type: String, required: true },
  },
  { timestamps: true }
);

export const Event = model<IEvent>("Event", eventSchema);

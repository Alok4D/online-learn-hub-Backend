import { IEvent } from "./event.interface";
import { Event } from "./event.model";

const createEvent = async (payload: IEvent) => {
  const event = await Event.create(payload);
  return event;
};

const getAllEvents = async () => {
  const events = await Event.find({});
  const totalEvents = await Event.countDocuments();
  return {
    data: events,
    meta: { total: totalEvents },
  };
};

export const EventServices = {
  createEvent,
  getAllEvents,
};

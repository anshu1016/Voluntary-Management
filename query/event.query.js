const Event = require('../models/event.models.js'); 

const getAllEvents = async () => {
  try {
    return await Event.find({});
  } catch (error) {
    console.error(error);
    throw error;
  }
}

const addEvent = async (eventData) => {
  try {
    const newEvent = new Event(eventData);
    return await newEvent.save();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

const deleteEvent = async (eventId) => {
  try {
    await Event.findByIdAndDelete(eventId);
    return await Event.find({});
  } catch (error) {
    console.error(error);
    throw error;
  }
}

const updateEvent = async (eventId, eventData) => {
  try {
    await Event.findByIdAndUpdate(eventId, eventData, { new: true });
    return await Event.find({});
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = { addEvent, updateEvent, deleteEvent, getAllEvents };

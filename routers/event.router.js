const { addEvent, updateEvent, deleteEvent, getAllEvents } = require('../query/event.query.js'); // Adjust the path to match your directory structure

const { Router } = require('express');

const eventRouter = Router();

eventRouter.post('/', async (req, res) => {
  try {
    const event = await addEvent(req.body);
    res.status(201).json({ message: "Event added successfully", data: event });
  } catch (error) {
    res.status(400).json({ message: "Error adding event", error });
  }
});

eventRouter.get('/', async (req, res) => {
  try {
    const events = await getAllEvents();
    if (events.length) {
      res.json({ message: "Retrieved all events", data: events });
    } else {
      res.status(404).json({ message: "No events found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching events", error });
  }
});

eventRouter.put('/:eventId', async (req, res) => {
  try {
    const event = await updateEvent(req.params.eventId, req.body);
    if (event) {
      res.json({ message: "Event updated successfully", data: event });
    } else {
      res.status(404).json({ message: "Event not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating event", error: error.message });
  }
});


eventRouter.delete('/:eventId', async (req, res) => {
  try {
    const result = await deleteEvent(req.params.eventId);
    res.json({ message: "Event deleted successfully", data: result });
  } catch (error) {
    res.status(400).json({ message: "Error deleting event", error });
  }
});

module.exports = { eventRouter };

const { addVolunteer, updateVolunteer, deleteVolunteer, getAllVolunteers } = require('../query/volunteer.query.js'); 

const { Router } = require('express');

const volunteerRouter = Router();

volunteerRouter.post('/', async (req, res) => {
  try {
    const volunteer = await addVolunteer(req.body);
    res.status(201).json({ message: "Volunteer added successfully", data: volunteer });
  } catch (error) {
    res.status(400).json({ message: "Error adding volunteer", error });
  }
});

volunteerRouter.get('/', async (req, res) => {
  try {
    const volunteers = await getAllVolunteers();
    if (volunteers.length) {
      res.json({ message: "Retrieved all volunteers", data: volunteers });
    } else {
      res.status(404).json({ message: "No volunteers found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching volunteers", error });
  }
});

volunteerRouter.put('/:volunteerId', async (req, res) => {
  try {
    const volunteer = await updateVolunteer(req.params.volunteerId, req.body);
    res.json({ message: "Volunteer updated successfully", data: volunteer });
  } catch (error) {
    res.status(400).json({ message: "Error updating volunteer", error });
  }
});

volunteerRouter.delete('/:volunteerId', async (req, res) => {
  try {
    const result = await deleteVolunteer(req.params.volunteerId);
    res.json({ message: "Volunteer deleted successfully", data: result });
  } catch (error) {
    res.status(400).json({ message: "Error deleting volunteer", error });
  }
});

module.exports = { volunteerRouter };

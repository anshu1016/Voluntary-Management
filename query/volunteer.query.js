const {Volunteer} = require('../models/volunteer.models.js');

const getAllVolunteers = async () => {
  try {
    return await Volunteer.find({});
  } catch (error) {
    console.error(error);
    throw error;
  }
}

const addVolunteer = async (volunteerData) => {
  try {
    const newVolunteer = new Volunteer(volunteerData);
    return await newVolunteer.save();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

const deleteVolunteer = async (volunteerId) => {
  try {
    await Volunteer.findByIdAndDelete(volunteerId);
    return await Volunteer.find({});
  } catch (error) {
    console.error(error);
    throw error;
  }
}

const updateVolunteer = async (volunteerId, volunteerData) => {
  try {
    await Volunteer.findByIdAndUpdate(volunteerId, volunteerData, { new: true });
    return await Volunteer.find({});
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = { addVolunteer, updateVolunteer, deleteVolunteer, getAllVolunteers };

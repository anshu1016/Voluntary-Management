const mongoose = require('mongoose');



const eventSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  volunteerRoles: [String] 

});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;

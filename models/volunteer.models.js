const mongoose = require('mongoose');

const volunteerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    skills: {
        type: [String],
        required: true
    },
    availability: {
        type: String,   
        required: true
    },
    areasOfInterest: {
        type: [String], 
        required: true
    }
});

const Volunteer = mongoose.model('Volunteer', volunteerSchema);

module.exports = { Volunteer };

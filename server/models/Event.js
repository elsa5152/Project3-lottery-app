const mongoose = require('mongoose');

//eventSchema 

const eventSchema = new mongoose.Schema({
    reward: String,
    date: String,
    time: String,
    resultAnnounced: Boolean,
    users: [{type:String}]
});

const Event =  mongoose.model('Event', eventSchema);

module.exports = { Event, eventSchema };
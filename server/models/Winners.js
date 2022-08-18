const mongoose = require('mongoose');
const {eventSchema} = require('./Event')
const {userSchema} = require('./User')

//ticket schema models
const winnerSchema = new mongoose.Schema(
    {
        user: [userSchema],
        event: [eventSchema]
    },
);

const Winner = mongoose.model('Winner', winnerSchema);

module.exports = { Winner, winnerSchema };
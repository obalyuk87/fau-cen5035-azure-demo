'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessagesSchema = new Schema({
    createdAt: {
        type: Date,
        default: Date.now
    },
    receipientEmail: String,
    receipientName: String,
    subject: String,
    message: String
});

module.exports = mongoose.model('Messages', MessagesSchema);
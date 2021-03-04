require('../models/messagesModel');
const mongoose = require('mongoose');

const mongoConnectionString = process.env.MONGODB_CONNECTION_STRING;
console.log(mongoConnectionString);
mongoose
    .connect(mongoConnectionString, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(err => {
        console.log('Unable to connect', err);
    });


module.exports = {
    'Messages': mongoose.model('Messages')
};

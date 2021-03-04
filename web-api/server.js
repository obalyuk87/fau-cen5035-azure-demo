require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const os = require('os');

const mongo = require('./services/mongo');
const Messages = mongo.Messages;


// init app
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.send({
        app: 'Messages REST API',
        hostname: os.hostname(),
        ts: new Date(),
    });
});


// operation on collection
app.route('/messages')
    .get((req, res) => {
        Messages.find({}, function (err, data) {
            if (err) {
                res.send(err);
            }
            res.json({
                count: data.length,
                data: data,
            });
        });
    })
    .post((req, res) => {
        const newMsg = new Messages(req.body);
        newMsg.save(function (err, data) {
            if (err) {
                res.send(err);
            }
            res.json(data);
        });
    });


// operations on single message
app.route('/messages/:id')
    .get((req, res) => {
        Messages.findById(req.params.id, function (err, data) {
            if (err) {
                res.status(500).send(err);
            }
            res.json(data);
        });
    })
    .put((req, res) => {
        Messages.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, function (err, data) {
            if (err) {
                res.status(500).send(err);
            }
            res.json(data);
        });
    })
    .delete((req, res) => {
        Messages.remove(
            {
                _id: req.params.id
            },
            function (err, data) {
                if (err) {
                    res.status(500).send(err);
                }

                if (data && data.deletedCount > 0){
                    res.json({ data: 'Message successfully deleted', details: data});
                }else{
                    res.status(404).json({ data: 'Message not found' });
                }
            }
        );
    });



// start application
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`STARTED REST API on: ${port}`);
});
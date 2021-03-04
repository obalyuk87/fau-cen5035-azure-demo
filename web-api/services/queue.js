const { QueueClient, QueueServiceClient } = require("@azure/storage-queue");

const connectionString = process.env.AZURE_STORAGE_CONNECTION_STRING;
const queueName = process.env.AZURE_STORAGE_QUEUE_NAME;


console.log("Creating queue: ", queueName);

// Instantiate a QueueServiceClient which will be used
// to create a QueueClient and to list all the queues
const queueServiceClient = QueueServiceClient.fromConnectionString(connectionString);

// Get a QueueClient which will be used
// to create and manipulate a queue
const queueClient = queueServiceClient.getQueueClient(queueName);

// Create the queue
queueClient.create();


const QueueAddMessage = async (messageText) => {
    console.log("Adding message to the queue: ", messageText);
    await queueClient.sendMessage(messageText);
}


module.exports = {
    'AddMessage': QueueAddMessage
}
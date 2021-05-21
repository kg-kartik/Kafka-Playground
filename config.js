const { Kafka } = require("kafkajs");

//unique id helps kafka know which client is producing the messages
clientId = "test-app";

//defines list of brokers in the cluster
brokers = ["localhost:5000"];

//name of the topic to which will send messages
topic = "message-log";

//initializing a new kafka client and simulatenously a producer from it
kafka = new Kafka({
    clientId,
    ssl: true,
    brokers,
});

module.exports = {
    clientId,
    brokers,
    topic,
    kafka,
};

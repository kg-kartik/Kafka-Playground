const { clientId, topic } = require("./config");

//creates a new consumer and sets groupId
//which helps Kafka keep track of the messages a particular client has to receive

const consumer = kafka.consumer({
    groupId: clientId,
});

const consume = async () => {
    //connecting the client and making it subscribe to the topic
    await consumer.connect();
    await consumer.subscribe({ topic });
    await consumer.run({
        //it runs everytime the consumer receives a message
        receiveMessage: ({ message }) => {
            // logging the message to the output
            console.log(`received message : ${message.value}`);
        },
    });
};

module.exports = consume;

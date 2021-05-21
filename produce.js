const { topic, kafka } = require("./config");

const producer = kafka.producer();

const produce = async () => {
    await producer.connect();

    let i = 0;

    setInterval(async () => {
        try {
            //send a message to the topic
            await producer.send({
                topic,
                messages: [
                    {
                        key: String(i),
                        message: "this is message" + i,
                    },
                ],
            });

            console.log("no of writes: ", i);
            i++;
        } catch (err) {
            console.log("Could not write messages" + err);
        }
    }, 1000);
};

module.exports = produce;

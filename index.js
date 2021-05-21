const produce = require("./produce");
const consume = require("./consume");

produce().catch((err) => {
    console.error("producer error : ", err);
});

consume().catch((err) => {
    console.error("consumer error : ", err);
});

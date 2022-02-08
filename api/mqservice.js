
import amqp from 'amqplib/callback_api';

<<<<<<< HEAD
const CONN_URL = 'amqp://rabbitmq:5672';
=======
const CONN_URL = 'amqp://localhost:5672';
>>>>>>> a6c551d (primeiro commit)

let ch = null;

amqp.connect(CONN_URL, function (err, conn) {
    conn.createChannel(function (err, channel) {
        ch = channel;
    });
});

export const publishToQueue = async (queueName, data) => {
    await ch.assertQueue(queueName, { durable: true });
    await ch.sendToQueue(queueName, Buffer.from(data));
}

process.on('exit', (code) => {
    if (typeof cn != 'undefined') {
        ch.close();
        console.log(`Closing rabbitmq channel`);
    }
<<<<<<< HEAD
});
=======
});
>>>>>>> a6c551d (primeiro commit)

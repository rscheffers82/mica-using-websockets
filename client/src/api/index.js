import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

const subScribeToTimer = (cb) => {
    socket.on('timer', timestamp => {
        cb(null, timestamp);
    });
    socket.emit('subscribeToTimer', 1000);
};

export { subScribeToTimer };
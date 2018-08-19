const io = require('socket.io')();
const port = 8000;

io.on('connection', function(client) {
    console.log('new connection', client);

    client.on('subscribeToTimer', interval => {
        console.log('client is subscribing to timer with interval ', interval);
        setInterval(() => {
            client.emit('timer', new Date());
        }, interval);
    });

    client.on('disconnect', function() {
        console.log('user disconnected');
    });
});


io.listen(port);
console.log('Socket listening on port', port);


const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
app.use(express.static('public'));

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    ws.on('message', (msg) => {
        wss.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN)
                client.send(msg.toString());
        });
    });
});

server.listen(3000, () => console.log('Server running on port 3000'));
